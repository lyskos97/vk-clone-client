import styled from 'react-emotion';
import Link from 'next/link';

import { AuthorLink, DateLink, ArrowDownIcon } from 'ui/atoms';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px 0;
`;

const Avatar = styled.div`
  flex: 1.5;
`;

const Title = styled.div`
  flex: 10;
`;

const Controls = styled.div`
  flex: 0.5;
`;

const Author = styled.h5`
  line-height: 16px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header = () => {
  return (
    <Wrap>
      <Avatar>
        <Link href="/">
          <a>
            <img
              style={{ width: 50, height: 50, borderRadius: '50%' }}
              src="http://via.placeholder.com/100x100"
              alt="avatar"
            />
          </a>
        </Link>
      </Avatar>
      <Title>
        <Author>
          <AuthorLink>Типичная Алма-Ата</AuthorLink>
        </Author>
        <DateLink>25 минут назад</DateLink>
      </Title>
      <ArrowDownIcon />
    </Wrap>
  );
};
