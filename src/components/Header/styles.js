import styled from 'styled-components';

export const Container = styled.header`
  z-index: 100;
  width: 100%;
  padding: 0 100px;
  position: fixed;
  background: ${(props) => props.theme.backgrounds.secundary};

  @media (max-width: 850px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary};

  nav {
    display: flex;
    align-items: center;

    > img {
      width: 120px;
      height: 100%;

    }

    > a {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid ${(props) => props.theme.colors.primary};
      position: relative;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.secundary};

        &::before {
          width: calc(100% - 10px);
          left: 10px;
        }
      }

      &::before {
        content: '';
        width: 0;
        height: 2px;
        top: 100%;
        left: 50%;
        position: absolute;
        background: ${(props) => props.theme.colors.primary};
        transition: all 0.4s;
      }
    }
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      > svg {
        margin: 0 3px;
      }
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }

  li {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.primary};

    > a {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors.secundary};
      }
    }

    > div {
      display: flex;
      align-items: center;

      > svg {
        margin: 3px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;

  > aside {
    position: relative;

    > img {
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.secundary};
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  @media (max-width: 850px) {
    margin-left: 5px;
    order: -1;
  }
`;

export const DropdownUser = styled.div`
  /* cursor: none; */
  display: ${(props) => (props.visibleDrop ? 'flex' : 'none')};
  flex-direction: column;
  width: 200px;
  padding: 10px;
  top: calc(100% + 25px);
  left: calc(50% - 100px);
  position: absolute;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    width: 0;
    height: 0;
    top: -20px;
    left: calc(50% - 18px);
    position: absolute;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.5);
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    & + div {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid ${(props) => props.theme.colors.third};
    }

    &:last-child {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${(props) => props.theme.colors.third};
    }

    > img {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.secundary};
    }

    > span {
      margin-top: 3px;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors.third};
      }
    }
  }
`;

export const ButtonSidebar = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  border: 0;
  /* margin: 0 10px; */
  position: relative;
  background: none;

  > span {
    width: 100%;
    height: 3px;
    margin: 10px 0;
    position: relative;
    background: ${(props) =>
      props.visibleSidebar ? 'none' : props.theme.colors.primary};

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 3px;
      margin: 10px 0;
      top: 0;
      left: 0;
      position: absolute;
      background: ${(props) => props.theme.colors.primary};
      transition: transform 0.6s ease;
    }

    &::before {
      transform: ${(props) =>
        props.visibleSidebar ? 'rotate(45deg) translate(-7px, -7px)' : 'unset'};
    }

    &::after {
      top: auto;
      bottom: 0;
      transform: ${(props) =>
        props.visibleSidebar ? 'rotate(-45deg) translate(-7px, 7px)' : 'unset'};
    }
  }

  @media (max-width: 850px) {
    display: flex;
    margin-left: 5px;
  }
`;
