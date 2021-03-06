import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { switchProp, ifProp } from 'styled-tools';

import { palette } from 'ui/theme';

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
    palette.colors.btnTertiaryText,
    palette.colors.white,
  )};

  background-color: ${switchProp('variant', {
    primary: palette.colors.btnPrimary,
    secondary: palette.colors.btnSecondary,
    tertiary: palette.colors.btnTertiary,
  })};

  &:hover {
    background-color: ${switchProp('variant', {
      primary: palette.colors.btnPrimaryHover,
      secondary: palette.colors.btnSecondaryHover,
      tertiary: palette.colors.btnTertiaryaryHover,
    })};
  }

  &:active {
    padding: 8px 16px 7px;

    background-color: ${switchProp('variant', {
      primary: palette.colors.btnPrimaryActive,
      secondary: palette.colors.btnSecondaryActive,
      tertiary: palette.colors.btnTertiaryActive,
    })};
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  compact: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  compact: false,
};
