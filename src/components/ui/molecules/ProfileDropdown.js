import { Component, forwardRef } from 'react';
import Link from 'next/link';

import { DropdownItem, DropdownSeparator, DropdownList } from '../atoms';

export const ProfileDropdown = forwardRef((props, ref) => {
  return (
    <DropdownList innerRef={ref} {...props}>
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
});
