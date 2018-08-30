import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import {
  LogoOutline,
  AudioOutline,
  ArrowDownOutline,
  LoupeOutline,
  NotifyOutline,
} from '../outlines';

const createIconComponent = Outline => {
  const Icon = styled(Outline)`
    ${p =>
      p.fill &&
      css`
        & path {
          fill: ${p.fill};
        }
      `};
  `;
  Icon.propTypes = {
    fill: PropTypes.string,
  };
  Icon.defaultProps = {
    fill: null,
  };
  return Icon;
};

export const LogoIcon = createIconComponent(LogoOutline);
export const AudioIcon = createIconComponent(AudioOutline);
export const ArrowDownIcon = createIconComponent(ArrowDownOutline);
export const LoupeIcon = createIconComponent(LoupeOutline);
export const NotifyIcon = createIconComponent(NotifyOutline);
