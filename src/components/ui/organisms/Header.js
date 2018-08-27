import styled from 'react-emotion';
import Link from 'next/link';

import { LogoIcon } from '../atoms';
import {
  Content,
  ImageWrapper,
  LogoWrapper,
  ProfileBadgeWrapper,
  SearchContainer,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from './HeaderStyles';

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>
        </LogoWrapper>
        <SearchWrapper>
          <SearchContainer>
            <SearchInput placeholder="Поиск" />
          </SearchContainer>
        </SearchWrapper>
        <ProfileBadgeWrapper>
          <span>Konstantin</span>
          <ImageWrapper>
            <img src="http://via.placeholder.com/320x160" alt="Profile pic" />
          </ImageWrapper>
        </ProfileBadgeWrapper>
      </Content>
    </Wrapper>
  );
};
