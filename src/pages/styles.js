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

    footer {
      margin-top: 20px;
      color: white;
      padding: 5px;

      span {
        font-family: roboto;
        font-size: 24px;
      }

      a {
        color: white;
        text-decoration: none;
        transition: 0.5s ease;
      }

      a:hover {
        color: #0c7b49;
        font-size: 18px;

        text-shadow: #0c7b49;
      }
    }
  }
`;

export const Title = styled.h1`
  text-align: center;

  color: green;
`;

export const ConverterBox = styled.div`
  max-width: 400px;
  max-height: 400px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-self: center;

  border-radius: 30px;
  border: 6px solid green;

  background-color: white;

  form {
    padding: 20px;

    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: "number",
  placeholder: `${props.onHolder}`,
  id: `${props.id}`,
}))`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;

  display: inline-block;
  width: 250px;
  padding: 10px 0 10px 35px;
  font-weight: 400;
  color: #377d6a;
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
    background: #7ab893;
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
      background: #377d6a;
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
    color: #377d6a;
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

export const ResponseBox = styled(InputBox)``;

export const Response = styled(Input)``;

export const ButtonBox = styled.span`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  align-items: center;
  justify-content: center;

  font-size: 20px;

  margin: 10px;

  width: 100px;
  height: 50px;

  border-radius: 30px;

  display: inline-flex;

  outline: none;

  cursor: pointer;

  padding: 8px;

  background-color: #e5e5e5;
`;
