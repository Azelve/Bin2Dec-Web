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
  // Here we have the variables to our binary and decimal numbers, also the label and its color
  const [binary, setBinary] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [label, setLabel] = useState("Binary");
  const [labelColor, setLabelColor] = useState("#008000");

  // Here we are seting the new Binary number onChange and checking if it is a binary number
  function checkField(e) {
    const binaryCheck = e.target.value;
    let x;

    if (binaryCheck === "") {
      setBinary();
      setLabel("Empty");
      return setLabelColor("#e59400");
    }

    for (x of binaryCheck) {
      if (x !== "0" && x !== "1") {
        setLabel("Error!");
        return setLabelColor("#e50000");
      }
    }
    setLabel("Binary");
    setLabelColor("#008000");
    setBinary(binaryCheck);
  }

  // Here we are checking if the number is correct and making the conversion
  function convert() {
    let conversion;

    if (label === "Error!") {
      return alert("Please, enter a binary number!");
    }

    if (!binary) {
      return alert("Please, enter a value!");
    }

    conversion = parseInt(binary, 2);

    setDecimal(conversion);
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
                  backgroundAfter={labelColor}
                  type="number"
                  placeholder="Either 0 or 1"
                  name="Binary"
                  onChange={checkField}
                />
                <label>{label}</label>
              </InputBox>

              <ResponseBox>
                <label>Decimal</label>
                <Response>{decimal}</Response>
              </ResponseBox>
            </div>
          </ConverterBox>

          <button onClick={() => convert()}>Convert</button>

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
