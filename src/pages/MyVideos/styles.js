import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  margin-top: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;
`;

export const MessageNotVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 84px);

  > strong {
    color: ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.fifith}`
        : `${props.theme.colors.primary}`};
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 10px;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.primary};
    background: #fca311;
    transition: all 0.4s;

    &:hover {
      background: ${darken(0.05, '#fca311')};
      color: ${(props) => props.theme.colors.secundary};
    }

    > svg {
      margin-left: 3px;
    }
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  background: ${(props) =>
    props.theme.title === 'light'
      ? `${props.theme.backgrounds.third}`
      : `${props.theme.backgrounds.secundary}`};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  > a {
    color: ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.fourth}`
        : `${props.theme.colors.primary}`};

    > img {
      width: 100%;
      height: 150px;
      margin-bottom: 5px;
      object-fit: cover;
    }

    > video {
      width: 100%;
      height: 150px;
      margin-bottom: 5px;
    }
  }

  > button {
    align-self: flex-end;
    right: 5px;
    top: 5px;
    position: absolute;
    border: 0;
    color: ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.fourth}`
        : `${props.theme.colors.primary}`};
    background: none;

    &:hover > div {
      opacity: 1;
      visibility: visible;
    }

    > div {
      z-index: 1;
      display: flex;
      width: 110px;
      padding: 8px 5px;
      right: calc(50% - 55px);
      top: calc(100% + 10px);
      position: absolute;
      opacity: 0.4;
      visibility: hidden;
      background: ${(props) => props.theme.opacitys.blackPrimary};
      transition: opacity 0.4s;

      &::before {
        content: '';
        width: 0;
        height: 0;
        top: -10px;
        left: calc(50% - 10px);
        position: absolute;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid
          ${(props) => props.theme.opacitys.blackPrimary};
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: ${(props) => props.theme.colors.primary};
        transition: color 0.4s;

        &:hover {
          color: ${(props) => props.theme.colors.third};
        }
      }
    }
  }
`;

export const VideoDescription = styled.div`
  display: flex;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.secundary};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    > p {
      display: -webkit-box;
      width: 24ch;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    > strong {
      margin-bottom: 3px;
    }

    > div {
      display: flex;
      align-items: center;
      font-size: 11px;

      > span {
      }

      > svg {
        margin: 0 5px;
      }

      > time {
      }
    }
  }
`;
