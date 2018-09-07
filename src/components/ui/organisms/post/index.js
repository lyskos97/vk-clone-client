import React from 'react';
import styled from 'react-emotion';
import { Card, ShareIcon, CommentIcon, LikeIcon } from 'ui/atoms';
import { Header } from './Header';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 8px 20px 20px;
  font-size: 13px;
`;

const Comments = styled.div`
  border-top: 1px solid #f1f1f1;
  padding: 12px 0;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid #f1f1f1;
  padding: 0 20px;
`;

const LikeContent = styled.div`
  padding: 12px 0;
  border-top: 1px solid #e7e8ec;
`;

const LikeButtons = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const Post = () => {
  return (
    <Card>
      <Wrap>
        <Header />
        <Body>Body</Body>
        <LikeWrap>
          <LikeContent>
            <LikeButtons>
              <IconWrapper>
                <LikeIcon />
              </IconWrapper>
              <IconWrapper>
                <CommentIcon />
              </IconWrapper>
              <IconWrapper>
                <ShareIcon />
              </IconWrapper>
            </LikeButtons>
            <div style={{ flex: 1 }}>
              <span>view count</span>
            </div>
          </LikeContent>
        </LikeWrap>
      </Wrap>
      <Comments>Comments</Comments>
    </Card>
  );
};
