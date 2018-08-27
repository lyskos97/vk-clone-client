import React from 'react';
import styled from 'react-emotion';
import { Card } from '../atoms';
import { PostHeader } from './PostHeader';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #f1f1f1;
`;

const Comments = styled.div`
  border-top: 1px solid #f1f1f1;
  padding: 12px 0;
`;

export const Post = () => {
  return (
    <Card>
      <Wrap>
        <PostHeader />
        <div style={{ paddingTop: 3, fontSize: 13 }}>Body</div>
        <Controls>
          <div style={{ flex: 11 }}>
            <span>line </span>
            <span>comment </span>
            <span>repost</span>
          </div>
          <div style={{ flex: 1 }}>
            <span>view count</span>
          </div>
        </Controls>
      </Wrap>
      <Comments>Comments</Comments>
    </Card>
  );
};
