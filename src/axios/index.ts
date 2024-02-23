import axios from 'axios';

export async function fetchData(city: string) {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const baseURL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

    const url = `${baseURL}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }