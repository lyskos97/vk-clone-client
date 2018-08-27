import { Logo } from '../outlines';
import styled, { css } from 'react-emotion';
import { ifProp, prop } from 'styled-tools';

export const LogoIcon = styled(Logo)`
  ${p =>
    p.fill &&
    css`
      & path {
        fill: ${p.fill};
      }
    `};
`;
