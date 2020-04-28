import React, { useState } from "react";
import {
  Container,
  Title,
  ConverterBox,
  InputBox,
  Input,
  ResponseBox,
  Response,
} from "./styles";

export default function App() {
  // Here we have the variables to our binary and decimal numbers
  const [binary, setBinary] = useState(0);
  const [decimal, setDecimal] = useState(0);

  // Here we are seting the new Binary number onChange
  function checkField(e) {
    setBinary(e.target.value[0]);
  }

  // Here we are checking if the number is correct and making the conversion
  function converter() {
    if (!binary) {
      return alert("Please, input a value!");
    }
    setDecimal(binary);
  }

  return (
    <Container>
      <div id="Box">
        <div id="Content">
          <Title>Bin2Dec</Title>

          <ConverterBox>
            <div>
              <InputBox>
                <Input
                  type="number"
                  placeholder="Either 0 or 1"
                  name="Binary"
                  onChange={checkField}
                />
                <label>Binary</label>
              </InputBox>

              <ResponseBox>
                <label>Decimal</label>
                <Response>{decimal}</Response>
              </ResponseBox>
            </div>
          </ConverterBox>

          <button onClick={() => converter()}>Convert</button>

          <footer>
            <span>&copy; </span>
            <a href="https://www.instagram.com/espelhoinvertido" target="blank">
              Espelho Invertido
            </a>
          </footer>
        </div>
      </div>
    </Container>
  );
}
