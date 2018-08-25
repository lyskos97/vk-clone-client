import styled from 'react-emotion';
import vars from '../../vars';

export const Wrapper = styled.header`
  position: fixed;
  height: ${vars.headerHeight};
  width: 100%;
  background-color: ${vars.colors.primary};
`;

export const Content = styled.div`
  margin: 0 150px;
  padding: 0 15px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  flex: 2;
`;

export const SearchWrapper = styled.div`
  flex: 8;
`;

export const ProfileBadgeWrapper = styled.div`
  flex: 2;  
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > span {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    margin-right: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 28px;
  height: 28px;

  > img {
    object-fit: fill;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;

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
    color: ${vars.colors.primary};
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

export const SearchContainer = styled.label``;
