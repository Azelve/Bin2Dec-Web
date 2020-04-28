import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;

  #Box {
    max-width: 1120px;
    width: 100%;
    height: 100vh;

    display: flex;
  }

  #Box #Content {
    width: 100%;

    padding: 20px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    button {
      font-size: 20px;

      margin-top: 15px;

      outline: none;

      cursor: pointer;

      height: 40px;
      text-align: center;
      width: 130px;
      border-radius: 40px;
      background: #000;
      border: 2px solid #00b300;
      color: #00b300;
      letter-spacing: 1px;
      text-shadow: 0;
      transition: 0.3s ease;

      &:hover {
        color: #000;
        background: #00b300;
        box-shadow: rgba(0, 255, 0, 0.8);
        font-weight: bold;
      }
    }

    footer {
      margin-top: 20px;
      color: white;
      padding: 5px;

      span {
        font-family: "Segoe UI";
        font-size: 20px;
      }

      a {
        color: white;
        text-decoration: none;
        transition: 0.3s ease;
      }

      a:hover {
        color: #00b300;
        font-size: 18px;

        text-shadow: #0c7b49;
      }
    }
  }
`;

export const Title = styled.h1`
  text-align: center;

  color: #00b300;
`;

export const ConverterBox = styled.div`
  max-width: 400px;
  max-height: 300px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-self: center;

  border-radius: 30px;
  border: 6px solid #00b300;

  background-color: white;

  div {
    padding: 20px;

    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
  }
`;

export const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;

  display: inline-block;
  width: 250px;
  padding: 10px 0 10px 35px;
  font-weight: 400;
  color: #0c7b49;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 65px; // Arbitrary.
  transition: all 0.3s ease-in-out;

  font-size: 16px;
  font-weight: bold;

  margin-left: 40px;

  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-size: 16px;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 30px;
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
    background: #0c7b49;
    transition: all 0.4s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    transform-origin: left bottom;
    z-index: 99;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 3px;
      background: ${(props) => props.backgroundAfter};
      transform-origin: left bottom;
      transition: all 0.4s ease-in-out;
      pointer-events: none;
      z-index: -1;
    }
    &:before {
      background: rgba(3, 36, 41, 0.2);
      z-index: -2;
      right: 20%;
    }
  }
`;

export const InputBox = styled.span`
  display: inline-block;
  position: relative;

  &:nth-child(2) ${Input} {
    text-indent: 85px;
  }
  &:nth-child(2) ${Input}:focus, &:nth-child(2) ${Input}:active {
    text-indent: 0;
  }
  ${Input}:focus,
  ${Input}:active {
    color: #0c7b49;
    text-indent: 0;
    background: #fff;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: rotate(-66deg);
      border-radius: 3px;

      &:before {
        transform: rotate(10deg);
      }
    }
  }
`;

export const ResponseBox = styled.span`
  margin: 0px 40px;

  label {
    color: #008000;
  }
`;

export const Response = styled.output`
  display: flex;
  justify-content: start;
  width: 180px;
  height: 15px;
  padding: 10px 0 10px 25px;
  font-weight: 400;
  color: #008000;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  margin-top: 5px;

  font-size: 16px;
  font-weight: bold;

  margin-left: 40px;
`;

export const Button = styled.button`
  font-size: 20px;

  margin-top: 15px;

  outline: none;

  cursor: pointer;

  height: 40px;
  text-align: center;
  width: 130px;
  border-radius: 40px;
  background: #000;
  border: 2px solid green;
  color: green;
  letter-spacing: 1px;
  text-shadow: 0;
  transition: 0.3s ease;

  &:hover {
    color: #000;
    background: green;
    box-shadow: rgba(0, 255, 0, 0.8);
  }
`;
