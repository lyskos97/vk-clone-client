import styled from 'react-emotion';

import { Header } from '../organisms';
import { Menu } from '../molecules';
import theme from '../theme';
import vars from '../../../vars';

const Gutter = styled.div`
  height: ${vars.headerHeight};
`;

const Wrapper = styled.div`
  margin: 0 150px;
  padding: 0 15px;

  display: flex;
`;

const MenuWrapper = styled.div`
  flex: 2;
`;

const ContentWrapper = styled.div`
  flex: 10;
`;

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Gutter />
      <Wrapper>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </div>
  );
};