import React from 'react';
import { WeatherCardContainer, Temperature, Description } from '@/styles/weatherCardStyles';

interface WeatherCardProps {
    time: string;
    temperature: string;
    weatherIcon: React.ReactNode;
    weatherDescription: string;
  }
  
const WeatherCard = ({ time, temperature, weatherIcon, weatherDescription }: WeatherCardProps) => {
  return (
    <WeatherCardContainer>
      <p className="text-sm font-medium text-white">{time}</p>
      {weatherIcon}
      <Temperature>{temperature}°</Temperature>
      <Description>{weatherDescription}</Description>
    </WeatherCardContainer>
  );
};

export default WeatherCard;