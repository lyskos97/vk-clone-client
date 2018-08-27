import styled from 'react-emotion';

import { AuthorLink, DateLink } from '../atoms';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  flex: 1;
`;

const Title = styled.div`
  flex: 10;
`;

const Controls = styled.div``;

const Author = styled.h5`
  line-height: 16px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostHeader = () => {
  return (
    <Wrap>
      <Avatar>
        <img
          style={{ width: 50, height: 50, borderRadius: '50%' }}
          src="http://via.placeholder.com/100x100"
          alt="avatar"
        />
      </Avatar>
      <Title>
        <Author>
          <AuthorLink>Типичная Алма-Ата</AuthorLink>
        </Author>
        <DateLink>25 минут назад</DateLink>
      </Title>
    </Wrap>
  );
};
