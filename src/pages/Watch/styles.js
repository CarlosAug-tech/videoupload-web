import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  color: ${(props) =>
    props.theme.title === 'light'
      ? `${props.theme.colors.fifith}`
      : `${props.theme.colors.primary}`};
  /* background: ${(props) =>
    props.theme.title === 'light'
      ? `${props.theme.backgrounds.third}`
      : `${props.theme.backgrounds.secundary}`};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */

  > video {
    width: 100%;
    max-height: 600px;
    height: 100%;
    background: ${(props) => props.theme.colors.fourth};
  }
`;

export const VideoInformation = styled.div`
  display: flex;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.third}`
        : `${props.theme.colors.fifith}`};

  > div {
    display: flex;
    flex-direction: column;

    > p {
      position: relative;
      font-weight: bold;
      font-size: 25px;
    }

    > time {
      font-size: 12px;
    }
  }
`;

export const VideoDescription = styled.div`
  /* min-height: 250px; */
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.third}`
        : `${props.theme.colors.fifith}`};

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #999;
      background: #444;
    }

    > strong {
      margin-left: 10px;
    }

    &:nth-of-type(2) {
      margin-left: 60px;
    }
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    > div {
      display: flex;
      align-items: center;
      flex-direction: row;

      > img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #999;
        background: #444;
      }

      > textarea {
        width: 100%;
        height: 60px;
        padding: 8px;
        resize: none;
        border-radius: 4px;
        border: 1px solid #999;
        color: ${(props) =>
          props.theme.title === 'light'
            ? `${props.theme.colors.fifith}`
            : `${props.theme.colors.primary}`};
        background: none;

        &::placeholder {
          color: ${(props) =>
            props.theme.title === 'light'
              ? `${props.theme.colors.fifith}`
              : `${props.theme.colors.primary}`};
        }
      }
    }

    button {
      align-self: flex-end;
      padding: 10px;
      margin-top: 5px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #fca311;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.05, '#fca311')};
      }
    }
  }
`;

export const Comment = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid
    ${(props) =>
      props.theme.title === 'light'
        ? `${props.theme.colors.third}`
        : `${props.theme.colors.fifith}`};

  &:last-of-type {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid
      ${(props) =>
        props.theme.title === 'light'
          ? `${props.theme.colors.third}`
          : `${props.theme.colors.fifith}`};
  }

  > div {
    display: flex;
    /* align-items: center; */

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 5px;
      padding: 5px 0;

      > strong {
        display: flex;
        align-items: center;
        margin-bottom: 3px;

        > svg,
        > time {
          color: ${(props) => props.theme.colors.third};
          font-weight: normal;
        }

        > svg {
          margin: 0 5px;
        }

        > time {
          font-size: 12px;
        }
      }
    }
  }
`;

export const EditComments = styled.button`
  align-self: center;
  border: 0;
  color: ${(props) =>
    props.theme.title === 'light'
      ? props.theme.colors.fifith
      : props.theme.colors.primary};
  background: none;
  position: relative;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 120px;
    top: calc(100% + 8px);
    left: calc(50% - 60px);
    position: absolute;
    opacity: 0.4;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.4s;

    &::before {
      content: '';
      width: 0;
      height: 0;
      top: -8px;
      left: calc(50% - 8px);
      position: absolute;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(0, 0, 0, 0.5);
    }

    > a {
      padding: 5px;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.fifith
          : props.theme.colors.primary};
      font-size: 12px;
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.third};
      }
    }
  }
`;
