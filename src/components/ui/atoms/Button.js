import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { switchProp, ifProp } from 'styled-tools';

import theme from '../theme';

export const Button = styled.button`
  padding: 7px 16px 8px;
  background-clip: border-box;
  border: none;
  border-radius: ${ifProp('compact', '4px', '3px')};

  line-height: ${ifProp('compact', '11px', '20px')};
  font-size: ${ifProp('compact', '12.5px', '14px')};
  font-weight: 400;

  cursor: pointer;
  outline: none;
  color: ${ifProp(
    { variant: 'tertiary' },
    theme.color.btnTertiaryText,
    theme.color.white,
  )};

  background-color: ${switchProp('variant', {
    primary: theme.color.btnPrimary,
    secondary: theme.color.btnSecondary,
    tertiary: theme.color.btnTertiary,
  })};

  &:hover {
    background-color: ${switchProp('variant', {
      primary: theme.color.btnPrimaryHover,
      secondary: theme.color.btnSecondaryHover,
      tertiary: theme.color.btnTertiaryaryHover,
    })};
  }

  &:active {
    padding: 8px 16px 7px;

    background-color: ${switchProp('variant', {
      primary: theme.color.btnPrimaryActive,
      secondary: theme.color.btnSecondaryActive,
      tertiary: theme.color.btnTertiaryActive,
    })};
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  compact: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  compact: false,
};
