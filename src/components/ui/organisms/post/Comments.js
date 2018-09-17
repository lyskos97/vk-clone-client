import styled from 'react-emotion';
import { palette } from 'ui/theme';
import { Comment } from './Comment';

const Wrap = styled.div`
  border-top: 1px solid #e7e8ec;
`;

const ShowMore = styled.div`
  margin: 15px 20px;
`;

const ShowMoreButton = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 2px;

  line-height: 32px;
  font-size: 12.5px;
  text-align: center;
  cursor: pointer;

  color: ${palette.colors.btnTertiaryText};
  background-color: ${palette.colors.post.comments.showMoreBtnBg};
`;

const Content = styled.div`
  padding: 0 20px;
`;

export const Comments = () => {
  return (
    <Wrap>
      <ShowMore>
        <ShowMoreButton>Показать все 82 комментария</ShowMoreButton>
      </ShowMore>
      <Content>
        <Comment />
        <Comment />
        <ShowMore>
          <ShowMoreButton>Добавлено 5 новых комментариев</ShowMoreButton>
        </ShowMore>
      </Content>
      <div style={{ borderTop: '1px solid #e7e8ec', padding: '10px 20px' }}>
        edit
      </div>
    </Wrap>
  );
};
