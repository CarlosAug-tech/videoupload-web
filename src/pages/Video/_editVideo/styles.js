import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 20px;
  margin-top: 20px;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;

    > label {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      cursor: pointer;
      margin-top: 20px;
      background: #eee;
      max-width: 250px;
      width: 100%;
      height: 150px;

      > video,
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      > input[type='file'] {
        display: none;
      }
    }

    > h2 {
      color: #333;
      padding-bottom: 2px;
      position: relative;
      text-align: center;

      &::before {
        content: '';
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        position: absolute;
        background: #333;
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
        color: #fff;
        background: rgba(0, 0, 0, 0.5);

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
        color: #fff;
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
        background: blue;
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
      /* margin-bottom: 20px; */
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: blue;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.2, 'blue')};
      }
    }
  }
`;
