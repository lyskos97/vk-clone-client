import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { switchProp } from 'styled-tools';

import theme from '../theme';

export const Button = styled.button`
  padding: 8px 16px 7px;
  background-clip: border-box;
  border: none;

  font-size: 14px;
  font-weight: 400;

  background-color: ${switchProp('variant', {
    primary: theme.color.btnPrimary,
    secondary: theme.color.btnSecondary,
  })};

  &:hover {
    background-color: ${switchProp('variant', {
      primary: theme.color.btnPrimaryHover,
      secondary: theme.color.btnSecondaryHover,
    })};
  }

  &:active {
    padding: 7px 16px 8px;

    background-color: ${switchProp('variant', {
      primary: theme.color.btnPrimaryActive,
      secondary: theme.color.btnSecondaryActive,
    })};
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
};
