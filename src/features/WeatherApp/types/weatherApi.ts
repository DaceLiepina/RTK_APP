
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number; 
    sunset: number;   
    timezone?: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


const apiKey = "3603bb385cba1812ea388450e7b58c94";
export const weatherApi = createApi({
reducerPath: "weatherApi",
baseQuery: fetchBaseQuery({
baseUrl: "https://api.openweathermap.org/data/2.5/",
}),
endpoints: (builder) =>({
getWeather: builder.query<WeatherData, string>({
query: (city) =>
`weather?q=${city}&appid=${apiKey}&units=metric`,
}),
}),
});
export const { useGetWeatherQuery } = weatherApi;
