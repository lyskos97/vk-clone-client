import styled, { css } from 'react-emotion';
import Link from 'next/link';
import { AuthorLink, DateLink, DeleteIcon, LikeIcon } from 'ui/atoms';
import { palette } from 'ui/theme';
import { CounterWithIcon } from 'ui/molecules';

const Wrap = styled.div`
  display: flex;
  padding: 8px 0 10px 0;

  &:not(:first-child) {
    border-top: 1px solid #e7e8ec;
  }
`;

const AvatarWrap = styled.div``;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const Content = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 13px;
`;

const buttonResetMixin = css`
  padding: 0;
  border: none;
  background: none;
  outline: none;
  font-size: 13px;
`;

const ReportButton = styled.button`
  ${buttonResetMixin};
  cursor: pointer;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1px;
`;

const Reply = styled.div``;

const ReplyButton = styled.button`
  ${buttonResetMixin};
  margin-left: 8px;

  color: ${palette.colors.link};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Comment = () => {
  return (
    <Wrap>
      <AvatarWrap>
        <Link href="/">
          <a>
            <Avatar
              src="https://pp.userapi.com/c841521/v841521101/3e5ad/6zu9duiS-2I.jpg?ava=1"
              alt="avatar"
            />
          </a>
        </Link>
      </AvatarWrap>
      <Content>
        <Header>
          <Link href="/">
            <AuthorLink small>Константин Лысенко</AuthorLink>
          </Link>
          <ReportButton>
            <DeleteIcon />
          </ReportButton>
        </Header>
        <Text>На зоне будут мемасики на спине вместо куполов...</Text>
        <Controls>
          <Reply>
            <Link href="/">
              <DateLink>27 минут назад</DateLink>
            </Link>
            <ReplyButton>Ответить</ReplyButton>
          </Reply>
          <div>
            <CounterWithIcon icon={LikeIcon} text="kek" tiny />
          </div>
        </Controls>
      </Content>
    </Wrap>
  );
};
