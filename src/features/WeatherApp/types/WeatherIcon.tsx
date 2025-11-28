import React from 'react';
import {
 
//   WiCloud,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
//   WiDayCloudy,
//   WiNightClear,
  WiRainMix,
//   WiHumidity,
//   WiStrongWind,
  WiBarometer,
  WiDaySunny,
//   WiSunset
} from "react-icons/wi";
import { 
  FiEye,
  FiDroplet,
  FiWind,
  FiSunrise,
  FiSunset 
} from "react-icons/fi";

interface WeatherIconProps {
  type: 'condition' | 'humidity' | 'wind' | 'pressure' | 'visibility' | 'sunrise' | 'sunset';
  condition?: string; // tikai condition tipam
  size?: number;
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  type,
  condition, 
  size = 24,
  className = ""
}) => {
  // Condition ikonas (galvenajai laika ikonai)
  const conditionIcons: { [key: string]: { icon: React.ComponentType<any>, color: string } } = {
    'clear': { icon: WiDaySunny, color: '#FFD43B' },
    'clouds': { icon: WiCloudy, color: '#74C0FC' },
    'rain': { icon: WiRain, color: '#339AF0' },
    'drizzle': { icon: WiRainMix, color: '#4DABF7' },
    'thunderstorm': { icon: WiThunderstorm, color: '#9775FA' },
    'snow': { icon: WiSnow, color: '#C0EB75' },
    'mist': { icon: WiFog, color: '#CED4DA' },
    'fog': { icon: WiFog, color: '#CED4DA' },
    'haze': { icon: WiFog, color: '#FFA94D' }
  };

  // Metrikas ikonas
  const metricIcons = {
    humidity: { icon: FiDroplet, color: '#4DABF7' },
    wind: { icon: FiWind, color: '#74C0FC' },
    pressure: { icon: WiBarometer, color: '#FFA94D' },
    visibility: { icon: FiEye, color: '#51CF66' },
    sunrise: { icon: FiSunrise, color: '#FFD43B' },
    sunset: { icon: FiSunset, color: '#FF6B6B' }
  };

  if (type === 'condition' && condition) {
    const normalizedCondition = condition.toLowerCase();
    const config = conditionIcons[normalizedCondition] || conditionIcons.clear;
    const IconComponent = config.icon;
    return <IconComponent size={size} color={config.color} className={className} />;
  }

  if (type in metricIcons) {
    const config = metricIcons[type as keyof typeof metricIcons];
    const IconComponent = config.icon;
    return <IconComponent size={size} color={config.color} className={className} />;
  }

  return null;
};

export default WeatherIcon;