import React from 'react';
import styled from 'react-emotion';
import { Card } from 'ui/atoms';
import { Like } from './Like';
import { Header } from './Header';
import { Body } from './Body';
import { Comments } from './Comments';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Post = () => {
  return (
    <Card>
      <Wrap>
        <Header />
        <Body />
        <Like />
      </Wrap>
      <Comments />
    </Card>
  );
};
