import Link from 'next/link';
import styled from 'react-emotion';

import vars from '../../../vars';

const Wrapper = styled.div`
  padding: 15px 5px 10px 0;
`;

const Item = styled.span`
  font-size: 13px;
  display: block;
  color: ${vars.colors.link};
  padding: 8px;

  &:hover {
    background-color: ${vars.colors.buttonActive};
  }
`;

export const Menu = () => {
  return (
    <Wrapper>
      <nav>
        <Link href="/me">
          <a>
            <Item>Моя Страница</Item>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Item>Новости</Item>
          </a>
        </Link>
        <Link href="/im">
          <a>
            <Item>Сообщения</Item>
          </a>
        </Link>
        <Link href="/misc">
          <a>
            <Item>Misc</Item>
          </a>
        </Link>
      </nav>
    </Wrapper>
  );
};
