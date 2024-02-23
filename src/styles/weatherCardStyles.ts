import styled from 'styled-components';

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Temperature = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
`;