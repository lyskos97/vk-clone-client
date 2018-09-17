import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { palette } from 'ui/theme';
import { ifProp } from 'styled-tools';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  display: inline-block;

  & > svg {
    width: ${ifProp('tiny', 11, 24)}px;
    height: ${ifProp('tiny', 11, 24)}px;
  }
`;

const Count = styled.span`
  margin-left: 6px;
  font-weight: 600;
  font-size: ${ifProp('tiny', 12, 14)}px;
  line-height: ${ifProp('tiny', 13, 16)}px;
  overflow: hidden;
  color: ${palette.colors.post.likeBtn};
`;

export const CounterWithIcon = ({ icon: Icon, text, tiny }) => {
  return (
    <Wrap>
      <IconWrapper tiny={tiny}>
        <Icon />
      </IconWrapper>
      <Count tiny={tiny}>{text}</Count>
    </Wrap>
  );
};

CounterWithIcon.propTypes = {
  tiny: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

CounterWithIcon.defaultProps = {
  tiny: false,
};
