import styled from 'react-emotion';
import {
 LikeIcon, CommentIcon, ShareIcon, EyeIcon,
} from 'ui/atoms';
import { palette } from 'ui/theme';

const Wrap = styled.div`
  display: flex;
  align-items: center;

  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  border-top: 1px solid #e7e8ec;
`;

const Controls = styled.div`
  display: flex;
`;

const ControlButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: 21px;
  }
`;

const Count = styled.span`
  margin-left: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  color: ${palette.colors.post.likeBtn};
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

const ViewCountWrap = styled.div``;

const ViewCount = styled.span`
  margin-left: 6px;
  font-size: 13px;
  color: ${palette.colors.post.viewCount};
`;

export const Like = () => {
  return (
    <Wrap>
      <Content>
        <Controls>
          <ControlButton>
            <IconWrapper>
              <LikeIcon />
            </IconWrapper>
            <Count>500</Count>
          </ControlButton>
          <ControlButton>
            <IconWrapper>
              <CommentIcon />
            </IconWrapper>
            <Count>52</Count>
          </ControlButton>
          <ControlButton>
            <IconWrapper>
              <ShareIcon />
            </IconWrapper>
            <Count>32</Count>
          </ControlButton>
        </Controls>
        <ViewCountWrap>
          <EyeIcon />
          <ViewCount>22k</ViewCount>
        </ViewCountWrap>
      </Content>
    </Wrap>
  );
};
