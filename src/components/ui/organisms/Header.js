import { Component } from 'react';
import styled from 'react-emotion';
import Link from 'next/link';

import { ProfileDropdown } from '../molecules';
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

const StyledProfileDropdown = styled(ProfileDropdown)`
  top: 48px;
  right: -2px;
`;

// TODO: Forward dropdown ref
export class Header extends Component {
  dropdownRef = React.createRef();

  state = {
    showDropdown: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  };

  handleOutsideClick = e => {
    if (this.dropdownRef && !this.dropdownRef.contains(e.target))
      this.setState({ showDropdown: false });
  };

  render() {
    const { showDropdown } = this.state;
    console.log('render', showDropdown);
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
          <ProfileBadgeWrapper onClick={this.toggleDropdown}>
            <span>Konstantin</span>
            <ImageWrapper>
              <img src="http://via.placeholder.com/320x160" alt="Profile pic" />
            </ImageWrapper>
          </ProfileBadgeWrapper>
          {showDropdown && <StyledProfileDropdown ref={this.dropdownRef} />}
        </Content>
      </Wrapper>
    );
  }
}

// export const Header = () => {
//   return (
//     <Wrapper>
//       <Content>
//         <LogoWrapper>
//           <Link href="/">
//             <a>
//               <LogoIcon />
//             </a>
//           </Link>
//         </LogoWrapper>
//         <SearchWrapper>
//           <SearchContainer>
//             <SearchInput placeholder="Поиск" />
//           </SearchContainer>
//         </SearchWrapper>
//         <ProfileBadgeWrapper>
//           <span>Konstantin</span>
//           <ImageWrapper>
//             <img src="http://via.placeholder.com/320x160" alt="Profile pic" />
//           </ImageWrapper>
//           <StyledProfileDropdown />
//         </ProfileBadgeWrapper>
//       </Content>
//     </Wrapper>
//   );
// };
