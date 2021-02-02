import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
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

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
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
