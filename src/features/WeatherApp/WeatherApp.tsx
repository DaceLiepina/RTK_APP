import React, { useState} from "react";
import { useGetWeatherQuery } from "./types/weatherApi";
import styles from "./WeatherApp.module.css";
import WeatherIcon from "./types/WeatherIcon";

// const WeatherApp: React.FC = () => {
//   const [cityInput, setCityInput] = useState("Riga"); // Sākuma pilsēta
//   const [searchCity, setSearchCity] = useState("Riga"); // Pilsēta meklēšanai

const WeatherApp: React.FC = () => {
  const [cityInput, setCityInput] = useState("");
    const [searchCity, setSearchCity] = useState<string | null>(null);
  
  // RTK Query hook - izmanto searchCity, kas mainās tikai nospiežot pogu
 // RTK Query hook - izmantojam cityInput, bet ar skip, lai nesūta pieprasījumu tukšam laukam
  const {
    data,
    isLoading,
    isError,
    error,
    
  } = useGetWeatherQuery(searchCity || '', {
    skip: !searchCity, // не отправляем запрос, пока нет города
  });


  // Validācijas funkcija
  const validateCity = (city: string): string | null => {
    const trimmedCity = city.trim();
    
    const validations = [
      { 
        condition: !trimmedCity, 
        message: "🚫 Please enter a city name" 
      },
      { 
        condition: /\d/.test(trimmedCity), 
        message: "🔢 Numbers are not allowed in city names" 
      },
      { 
        condition: /[!@#$%^&*()_+=\[\]{};":\\|,.<>\/?]/.test(trimmedCity), 
        message: "❌ Only letters, spaces, hyphens (-) and apostrophes (') are allowed" 
      },
      { 
        condition: trimmedCity.length < 2, 
        message: "📏 City name must be at least 2 characters" 
      },
      { 
        condition: trimmedCity.length > 50, 
        message: "📏 City name is too long" 
      },
      { 
        condition: /(.)\1{2,}/.test(trimmedCity),
        message: "🔁 Too many repeated characters in city name" 
      },
      { 
        condition: /^[bcdfghjklmnpqrstvwxz]{5,}$/i.test(trimmedCity),
        message: "🏙️ Please enter a valid city name" 
      },
      { 
        condition: /^[a-z]{6,}$/i.test(trimmedCity) && !/[aeiouy]/i.test(trimmedCity),
        message: "🔤 This doesn't look like a real city name" 
      }
    ];
    
    for (const validation of validations) {
      if (validation.condition) {
        return validation.message;
      }
    }
    return null; // No error
  };

  const handleSearch = (): void => {
    const validationError = validateCity(cityInput);
    if (validationError) {
      alert(validationError);
      return;
    }
    
      // Iestatām jauno pilsētu, kas izraisīs jaunu pieprasījumu
    setSearchCity(cityInput.trim());
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // // Automātiski refetch, kad mainās searchCity
  // useEffect(() => {
  //   if (searchCity && searchCity.trim() !== "") {
  //     refetch();
  //   }
  // }, [searchCity, refetch]);

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString("lv-LV", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Konvertē error objektu uz lasāmu tekstu
  const getErrorMessage = () => {
    if (!error) return "Unknown error";
    
    if (typeof error === 'string') return error;
    
    if ('status' in error) {
      if (error.status === 404) {
        return "City not found. Please check the city name.";
      }
      if (error.status === 400) {
        return "Invalid request. Please try again.";
      }
      if (error.status === 500) {
        return "Server error. Please try again later.";
      }
      if (error.data) {
        return `Error: ${JSON.stringify(error.data)}`;
      }
      return `Error ${error.status}`;
    }
    
    return "Failed to fetch weather data";
  };

  return (
    <div className={styles.weatherApp}>
      <h1 className={styles.weatherTitle}>Weather app</h1>
      <p className={styles.weatherSubtitle}>
        Check weather conditions worldwide
      </p>

      <div className={styles.searchContainer}>
        <input
          type="text"
          value={cityInput}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className={styles.searchInput}
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className={styles.searchButton}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

      {isLoading && <div className={styles.loading}>Loading weather data...</div>}

      <div className={styles.weatherContainer}>
        {isError && (
          <div className={styles.error}>
            <p>❌ {getErrorMessage()}</p>
          </div>
        )}

        {data && !isError && (
          <div className={styles.weatherData}>
            <h2 className={styles.locationTitle}>
              {data.name}, {data.sys.country}
            </h2>

            {/* IZCELTĀ TEMPERATŪRA */}
            <div className={styles.temperatureSection}>
              <div className={styles.weatherIcon}>
                <WeatherIcon 
                  condition={data.weather[0].main} 
                  size={80} 
                  type={"condition"} 
                />
              </div>
              <p className={styles.currentTemp}>
                {Math.round(data.main.temp)}°C
              </p>
              <p className={styles.feelsLike}>
                Feels like: {Math.round(data.main.feels_like)}°C
              </p>
            </div>

            <p className={styles.weatherDescription}>
              {data.weather[0].description}
            </p>

            <div className={styles.weatherDetails}>
              <div className={styles.detailItem}>
                <WeatherIcon type="humidity" size={20} />
                <div className={styles.detailLabel}>Humidity</div>
                <div className={styles.detailValue}>{data.main.humidity}%</div>
              </div>

              <div className={styles.detailItem}>
                <WeatherIcon type="wind" size={20} />
                <div className={styles.detailLabel}>Wind Speed</div>
                <div className={styles.detailValue}>{data.wind.speed} m/s</div>
              </div>

              <div className={styles.detailItem}>
                <WeatherIcon type="pressure" size={20} />
                <div className={styles.detailLabel}>Pressure</div>
                <div className={styles.detailValue}>
                  {data.main.pressure} hPa
                </div>
              </div>

              <div className={styles.detailItem}>
                <WeatherIcon type="visibility" size={20} />
                <div className={styles.detailLabel}>Visibility</div>
                <div className={styles.detailValue}>
                  {(data.visibility / 1000).toFixed(1)} km
                </div>
              </div>

              <div className={styles.detailItem}>
                <WeatherIcon type="sunrise" size={20} />
                <div className={styles.detailLabel}>Sunrise</div>
                <div className={styles.detailValue}>
                  {formatTime(data.sys.sunrise)}
                </div>
              </div>

              <div className={styles.detailItem}>
                <WeatherIcon type="sunset" size={20} />
                <div className={styles.detailLabel}>Sunset</div>
                <div className={styles.detailValue}>
                  {formatTime(data.sys.sunset)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!data && !isLoading && !isError && (
        <div className={styles.hintText}>
          💡 Enter a city name to check the weather
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
