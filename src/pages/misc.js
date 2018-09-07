import { PureComponent } from 'react';
import styled from 'react-emotion';
import { prop } from 'styled-tools';

import { Layout } from 'ui/templates';
import {
  Card,
  Button,
  AudioIcon,
  ArrowDownIcon,
  LogoIcon,
  LoupeIcon,
  NotifyIcon,
} from 'ui/atoms';
import { DropdownList, DropdownItem, DropdownSeparator } from 'ui/atoms';
import { palette } from 'ui/theme';

const Grid = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${prop('w', 1)};
  margin: 0 5px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 5px;
`;

const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${palette.colors.grey};
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default class extends PureComponent {
  state = {
    showDropdown: true,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  };

  render() {
    const { showDropdown } = this.state;

    return (
      <Layout>
        <Grid>
          <Col w={1}>
            <Card>
              <Header>
                <h3>Buttons</h3>
              </Header>
              <Content>
                <Row>
                  <Button>DEFAULT</Button>
                  <Button variant="secondary">SECONDARY</Button>
                  <Button variant="tertiary">TERTIARY</Button>
                </Row>
                <Row>
                  <Button compact>DEFAULT</Button>
                  <Button compact variant="secondary">
                    SECONDARY
                  </Button>
                  <Button compact variant="tertiary">
                    TERTIARY
                  </Button>
                </Row>
              </Content>
            </Card>
          </Col>
          <Col w={1}>
            <Card>
              <Header>
                <h3>Icons</h3>
              </Header>
              <Content>
                <Row>
                  <AudioIcon />
                  <ArrowDownIcon />
                  <LogoIcon fill={palette.colors.grey} />
                  <LoupeIcon />
                  <NotifyIcon />
                </Row>
                <Row>
                  <AudioIcon fill={palette.colors.primary} />
                  <ArrowDownIcon fill={palette.colors.link} />
                  <LogoIcon fill={palette.colors.border} />
                  <LoupeIcon fill={palette.colors.btnSecondary} />
                  <NotifyIcon fill={palette.colors.btnTertiaryaryHover} />
                </Row>
              </Content>
            </Card>
          </Col>
        </Grid>
      </Layout>
    );
  }
}
