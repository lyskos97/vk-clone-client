import Head from 'next/head';

import { Layout } from 'ui/templates';
import { Card } from 'ui/atoms';

const Me = () => {
  return (
    <Layout>
      <Head>
        <title>Моя страница</title>
      </Head>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 3.5 }}>
          <Card>
            <div style={{ height: 250 }}>AVA</div>
          </Card>
          <Card>
            <div style={{ height: 50 }}>shit</div>
          </Card>
          <Card>
            <div style={{ height: 100 }}>presents</div>
          </Card>
          <Card>
            <div
              style={{
                height: 300,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ flex: 1 }}>friends | all</div>
              <div style={{ flex: 1 }}>friends | online</div>
            </div>
          </Card>
        </div>
        <div style={{ flex: 8.5, margin: '0 10px' }}>
          <Card>
            <div style={{ height: 300 }}>resume</div>
          </Card>
          <Card>
            <div style={{ height: 150 }}>photos</div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Me;
