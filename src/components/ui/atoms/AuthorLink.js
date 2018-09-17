import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { ifProp } from 'styled-tools';

export const AuthorLink = styled.a`
  font-size: ${ifProp('small', '12.5', '13')}px;
  line-height: 1.36;
  font-weight: 600;

  text-decoration: none;
  color: #2a5885;

  &:hover {
    text-decoration: underline;
  }
`;

AuthorLink.propTypes = {
  small: PropTypes.bool,
};

AuthorLink.defaultProps = {
  small: false,
};
