import React from 'react';
import styled from 'react-emotion';
import { Card } from 'ui/atoms';
import { Like } from './Like';
import { Header } from './Header';
import { Body } from './Body';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Comments = styled.div`
  border-top: 1px solid #f1f1f1;
  padding: 12px 0;
`;

export const Post = () => {
  return (
    <Card>
      <Wrap>
        <Header />
        <Body />
        <Like />
      </Wrap>
      <Comments>Comments</Comments>
    </Card>
  );
};
