import Head from 'next/head';

import { Layout } from 'ui/templates';
import { Card } from 'ui/atoms';

const Im = () => {
  return (
    <Layout>
      <Head>
        <title>Сообщения</title>
      </Head>
      <div style={{ height: '89vh' }}>
        <Card style={{ height: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flex: 4, borderRight: '1px solid #f1f1f1' }}>
              <div style={{ borderBottom: '1px solid #f1f1f1', padding: 10 }}>
                <input
                  type="text"
                  placeholder="Поиск"
                  style={{ border: 'none' }}
                />
              </div>

              {/* list */}
              <div style={{ display: 'flex' }}>
                <div style={{ padding: 10 }}>AVA</div>
                <div
                  style={{
                    flex: 1,
                    borderBottom: '1px solid #f1f1f1',
                    padding: 10,
                  }}
                >
                  title
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ padding: 10 }}>AVA</div>
                <div
                  style={{
                    flex: 1,
                    borderBottom: '1px solid #f1f1f1',
                    padding: 10,
                  }}
                >
                  title
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              conversation
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Im;
