import { atom } from 'jotai';

interface WeatherData {
    name: string;
    main: {
      temp: string;
    };
    weather: {
      main: string;
      icon: string;
    }[];
  }

export const cityAtom = atom('');
export const weatherAtom = atom<WeatherData | null>(null);
export const loadingAtom = atom(false);