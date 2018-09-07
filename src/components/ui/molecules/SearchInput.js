import styled from 'react-emotion';
import { palette } from 'ui/theme';

export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 14px;
  background-color: #2a5885;
  color: #fff;
  padding: 6px;
  padding-left: 19px;
  font-size: 13px;

  &::placeholder {
    font-size: 13px;
    color: ${palette.colors.primary};
  }

  &:focus {
    background-color: #fff;
    outline: none;
    color: #000;

    &::placeholder {
      color: transparent;
    }
  }
`;
