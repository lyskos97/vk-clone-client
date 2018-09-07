import Head from 'next/head';
import styled from 'react-emotion';

import { Layout } from 'ui/templates';
import { Card } from 'ui/atoms';
import { Post } from 'ui/organisms';

const Wrapper = styled.div`
  display: flex;
`;

const FeedWrapper = styled.div`
  flex: 2;
  margin: 0 10px;
`;

const FeedOptionsWrapper = styled.div`
  flex: 1;
  background-color: #edeef0;
`;

const FeedItemBox = styled.div`
  margin-top: 15px;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  background-color: #fff;
`;

const ImageWrapper = styled.div`
  width: 28px;
  height: 28px;

  > img {
    object-fit: fill;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Новости</title>
      </Head>
      <Wrapper>
        <FeedWrapper>
          <Card>
            <div
              style={{
                padding: 10,
                paddingLeft: 15,
                display: 'flex',
                alignItems: 'center',
                fontSize: 13,
              }}
            >
              <div style={{ flex: 1 }}>
                <ImageWrapper>
                  <img
                    src="http://via.placeholder.com/320x160"
                    alt="Profile pic"
                  />
                </ImageWrapper>
              </div>
              <div style={{ flex: 11 }}>
                <input
                  type="text"
                  placeholder="Что у Вас нового?"
                  style={{ width: '100%', border: 'none' }}
                />
              </div>
            </div>
          </Card>

          {/* <Card>
            <div style={{ padding: 15 }}>
              <span>Истории</span>
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#a1a1a1',
                    width: 100,
                    marginRight: 10,
                    height: 170,
                  }}
                >
                  ONE
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#a1a1a1',
                    width: 100,
                    height: 170,
                    marginRight: 10,
                  }}
                >
                  ONE
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#a1a1a1',
                    width: 100,
                    height: 170,
                  }}
                >
                  ONE
                </div>
              </div>
            </div>
          </Card> */}

          <div>
            <Post />
            <Post />
            <Post />
          </div>
        </FeedWrapper>
        <FeedOptionsWrapper>
          <Card>
            <div style={{ padding: '6px 0' }}>
              <ul style={{ listStyle: 'none' }}>
                <li>Новости</li>
                <li>
                  <ul style={{ listStyle: 'none' }}>
                    <li>Фотографии</li>
                    <li>Видеозаписи</li>
                    <li>Друзья</li>
                  </ul>
                </li>
                <li>Рекомендации</li>
                <li>Поиск</li>
              </ul>
              <hr />
              <ul style={{ listStyle: 'none' }}>
                <li>Обновления</li>
                <li>Комментарии</li>
              </ul>
            </div>
          </Card>
        </FeedOptionsWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Index;
