import { PureComponent } from 'react';
import styled from 'react-emotion';
import { prop } from 'styled-tools';

import { Layout } from '../components/ui/templates';
import { Card, Button } from '../components/ui/atoms';
import { DropdownList } from '../components/ui/molecules';
import theme from '../components/ui/theme';
import { Dropdown } from '../components/ui/organisms';

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
  border-bottom: 1px solid ${theme.color.grey};
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default class extends PureComponent {
  render() {
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
                <h3>Dropdown</h3>
              </Header>
              <Content>
                <Dropdown />
              </Content>
            </Card>
          </Col>
        </Grid>
      </Layout>
    );
  }
}
