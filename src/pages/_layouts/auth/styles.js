import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 100px;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  background: ${(props) => props.theme.opacitys.black};

  form {
    display: flex;
    flex-direction: column;

    > h2 {
      color: ${(props) => props.theme.colors.primary};
      padding-bottom: 2px;
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        position: absolute;
        background: ${(props) => props.theme.colors.primary};
      }
    }

    > div {
      margin-bottom: 20px;
      position: relative;

      &:first-of-type {
        margin-top: 20px;
      }

      > input {
        width: 100%;
        height: 44px;
        padding: 10px 20px 0 10px;
        border: 0;
        border-radius: 4px;
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.opacitys.black};

        &:not(:placeholder-shown) ~ label,
        &:focus ~ label {
          top: 5px;
          left: 5px;
          font-size: 10px;
        }

        &:focus ~ span::before,
        &:focus ~ span::after {
          width: 100%;
        }

        &:focus ~ span > i::before,
        &:focus ~ span > i::after {
          height: 100%;
        }
      }

      > label {
        top: 15px;
        left: 10px;
        position: absolute;
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.4s;
      }

      > svg {
        top: 15px;
        right: 5px;
        position: absolute;
      }

      > span::before,
      > span::after,
      > span > i::before,
      > span > i::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        background: ${(props) => props.theme.colors.secundary};
        transition: all 0.4s;
      }

      > span::before,
      > span::after {
        width: 0;
        height: 2px;
      }

      > span > i::before,
      > span > i::after {
        width: 2px;
        height: 0;
      }

      > span::after,
      > span > i::after {
        top: auto;
        left: auto;
        right: 0;
        bottom: 0;
      }
    }

    > button {
      height: 44px;
      margin-bottom: 20px;
      border: 0;
      border-radius: 4px;
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.defaults.button};
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.02, '#14213d')};
      }
    }

    > a {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.2;

      &:hover {
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }
`;
