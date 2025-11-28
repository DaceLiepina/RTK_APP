import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  setCity,
  clearError,
} from "../../features/WeatherApp/types/weatherSlice";
import type { RootState } from "../../app/store";
import styles from "./WeatherApp.module.css";
import   WeatherIcon from "./types/WeatherIcon";

const WeatherApp: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error, city } = useSelector(
    (state: RootState) => state.weather
  );

  const handleSearch = (): void => {
    if (!city.trim()) {
      alert("Введите название города");
      return;
    }
    dispatch(fetchWeather(city) as any);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCity(e.target.value));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [city, dispatch, error]);

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString("lv-LV", {
      hour: "2-digit",
      minute: "2-digit",
    });
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
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className={styles.searchInput}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className={styles.searchButton}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading && <div className={styles.loading}>Loading weather data...</div>}

      <div className={styles.weatherContainer}>
        {error && (
          <div className={styles.error}>
            <p>❌ {error}</p>
          </div>
        )}

        {data && !error && (
          <div className={styles.weatherData}>
            <h2 className={styles.locationTitle}>
              {data.name}, {data.sys.country}
            </h2>

            {/* IZCELTĀ TEMPERATŪRA */}
            <div className={styles.temperatureSection}>
              <div className={styles.weatherIcon}>
                <WeatherIcon condition={data.weather[0].main} size={80} type={"condition"} />
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

      {!data && !loading && !error && (
        <div className={styles.hintText}>
          💡 Enter a city name to check the weather
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
