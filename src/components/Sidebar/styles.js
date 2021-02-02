import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transform: ${(props) =>
    props.visibleSidebar ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.6s;
`;

export const Content = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  padding-top: 64px;
  right: 0;
  position: absolute;
  background: ${(props) =>
    props.theme.title === 'light'
      ? props.theme.backgrounds.primary
      : props.theme.backgrounds.secundary};
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:first-child {
      justify-content: center;
      flex-direction: column;
      ${(props) =>
        !props.isLogged &&
        css`
          padding-top: 9px;
          border-top: 1px solid ${(props) => props.theme.colors.third};
        `}

      > img {
        width: 100px;
        height: 100px;
        margin: 5px 0 3px;
        border-radius: 50%;
        background: ${(props) => props.theme.colors.secundary};
      }

      > strong {
        text-align: center;
        color: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors.fourth
            : props.theme.colors.primary};
      }
    }

    & + div {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid ${(props) => props.theme.colors.third};
    }

    &:last-child {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid ${(props) => props.theme.colors.third};
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 10px;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.fourth
          : props.theme.colors.primary};
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors.third};
      }
    }
  }
`;
