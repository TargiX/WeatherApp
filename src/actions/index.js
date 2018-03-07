import axios from 'axios';

const API_KEY = '3cc8df6a9ce81c0c15b7916e3eb234f5'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);

   return {
      type: FETCH_WEATHER,
      payload: request
   };
}

