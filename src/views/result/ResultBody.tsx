import Image from 'next/image'
import { useAtom } from 'jotai'

import WeatherCard from '@/views/result/components/WeatherCard';
import { City, DayDate, WeatherContainer, ResultContainer } from '@/styles/resultBodyStyles';

import { weatherAtom } from '@/jotai/store';
import { currentDate } from '@/utils/date';

export default function ResultBody() {
  const [weather] = useAtom(weatherAtom);

  if (!weather) return null;
  
  const weatherData = weather;
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const weatherMain = weatherData.weather[0].main;
  const icon = weatherData.weather[0].icon;
  const { formattedDate, formattedHour } = currentDate();

  return (
    <ResultContainer>
      <City>{city}</City>
      <DayDate>{formattedDate}</DayDate>
      <WeatherContainer>
        <WeatherCard
        time={formattedHour}
        temperature={temp}
        weatherIcon={<Image src={`/icons/${icon}@2x.png`} alt="Weather Icon" width={100} height={100} />}
        weatherDescription={weatherMain}
        />
        {/* Add more WeatherCard components for other times */}
      </WeatherContainer>
    </ResultContainer>
  );
}