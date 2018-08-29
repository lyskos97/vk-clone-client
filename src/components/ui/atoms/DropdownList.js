import styled from 'react-emotion';

const Wrap = styled.div`
  position: absolute;

  width: 160px;
  padding: 4px 0;
  border: 1px solid #c5d0db;
  border-radius: 4px;

  background-color: #fff;

  &::before {
    position: absolute;
    top: 0;
    left: 50%;

    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -3px;
    border-top: 1px solid #c5d0db;
    border-left: 1px solid #c5d0db;

    background-color: #fff;
    transform: rotate(45deg);
    content: '';
  }
`;

export const DropdownList = ({ children, ...otherProps }) => {
  return (
    <Wrap {...otherProps}>
      {children}
    </Wrap>
  );
};
