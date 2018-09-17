import styled from 'react-emotion';

const Wrap = styled.div`
  padding: 8px 20px 19px;
  font-size: 13px;
`;

const Text = styled.div`
  padding-top: 3px;
`;

const Media = styled.div`
  padding-top: 10px;
`;

export const Body = () => {
  return (
    <Wrap>
      <Text>text</Text>
      <Media>media files</Media>
    </Wrap>
  );
};
