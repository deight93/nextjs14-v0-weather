import { useAtom } from 'jotai'
import { SearchContainer, SearchInput, SearchIcon } from '@/styles/searchBarStyles';
import { cityAtom, weatherAtom } from '@/jotai/store';
import { fetchData } from '@/axios';

export default function SearchBody() {
  const [city, setCity] = useAtom(cityAtom);
  const [weather, setWeather] = useAtom(weatherAtom);

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    if (city.trim() !== '') {
      const data = await fetchData(city);
      if (!data) {
        setWeather(null);
      } else {
        setWeather(data);
      }
    }
  };

  const handleSearchIconClick = (e: any) => {
    handleSubmit(e);
  };

  const handleOnKeyPress = (e: any) => {
    if (e.key !== 'Enter') return;
    handleSearchIconClick(e);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search City"
        value={city}
        onChange={handleChange}
        onKeyDown={handleOnKeyPress}
      />
      <SearchIcon
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleSearchIconClick}
        style={{ cursor: 'pointer' }}
      >
        <path d="M15 15l5-5m0 0l-5-5m5 5H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </SearchIcon>
    </SearchContainer>
  );
}