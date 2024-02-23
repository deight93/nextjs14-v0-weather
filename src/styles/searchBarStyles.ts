import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem; /* 오른쪽에 아이콘을 위한 여유 공간 확보 */
  border-radius: 0.375rem;
  background-color: white;
  color: #4b5563;
  font-size: 1rem;
  border: none;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #cbd5e0;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1.5rem;
  width: 1.5rem;
  color: #ccc;
`;