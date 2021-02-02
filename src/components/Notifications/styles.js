import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  margin-right: 25px;

  @media (max-width: 850px) {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  border: 0;
  background: none;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        position: absolute;
        border-radius: 50%;
        background: red;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${(props) => (props.visibleNotify ? 'flex' : 'none')};
  width: 260px;
  padding: 15px 5px;
  top: calc(100% + 30px);
  left: calc(50% - 130px);
  position: absolute;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 850px) {
    width: 220px;
    left: calc(50% - 110px);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    top: -20px;
    left: calc(50% - 20px);
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid ${(props) => props.theme.colors.third};
  }

  > p {
    font-size: 13px;
  }

  > time {
    font-size: 10px;
  }

  > button {
    border: 0;
    margin-left: 3px;
    padding-left: 3px;
    border-left: 1px solid ${(props) => props.theme.colors.third};
    color: ${(props) => props.theme.colors.secundary};
    background: 0;
    font-size: 10px;
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-left: 3px;
        border-radius: 50%;
        background: red;
      }
    `}
`;
