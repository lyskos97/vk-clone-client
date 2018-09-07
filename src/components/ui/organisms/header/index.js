import { Component, createRef } from 'react';
import styled from 'react-emotion';
import Link from 'next/link';

import { ProfileDropdown } from 'ui/molecules';
import { LogoIcon } from 'ui/atoms';
import {
  Content,
  ImageWrapper,
  LogoWrapper,
  ProfileBadgeWrapper,
  SearchContainer,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from './styles';

const AdjustedProfileDropdown = styled(ProfileDropdown)`
  top: 48px;
  right: -2px;
`;

export class Header extends Component {
  dropdownRef = createRef();
  dropdownButtonRef = createRef();

  state = {
    showDropdown: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  };

  handleClickOutside = e => {
    if (this.dropdownRef.current) {
      if (!this.dropdownButtonRef.current.contains(e.target)) {
        this.setState({ showDropdown: false });
      }
    }
  };

  render() {
    const { showDropdown } = this.state;
    console.log('render', showDropdown);
    console.log('this.ref', this.dropdownRef);
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
          <ProfileBadgeWrapper
            onClick={this.toggleDropdown}
            innerRef={this.dropdownButtonRef}
          >
            <span>Konstantin</span>
            <ImageWrapper>
              <img src="http://via.placeholder.com/320x160" alt="Profile pic" />
            </ImageWrapper>
            {showDropdown && (
              <AdjustedProfileDropdown innerRef={this.dropdownRef} />
            )}
          </ProfileBadgeWrapper>
        </Content>
      </Wrapper>
    );
  }
}
