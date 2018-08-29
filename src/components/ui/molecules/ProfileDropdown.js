import { Component } from 'react';
import Link from 'next/link';

import { DropdownItem, DropdownSeparator, DropdownList } from '../atoms';

export const ProfileDropdown = props => {
  return (
    <DropdownList {...props}>
      <Link href="/me">
        <a>
          <DropdownItem>Моя страница</DropdownItem>
        </a>
      </Link>
      <DropdownSeparator />
      <Link href="/">
        <a>
          <DropdownItem>Редактировать</DropdownItem>
        </a>
      </Link>
      <Link href="/">
        <a>
          <DropdownItem>Настройки</DropdownItem>
        </a>
      </Link>
      <Link href="/">
        <a>
          <DropdownItem>Помощь</DropdownItem>
        </a>
      </Link>
      <DropdownSeparator />
      <Link href="/">
        <a>
          <DropdownItem>Выйти</DropdownItem>
        </a>
      </Link>
    </DropdownList>
  );
};
