import React from "react";
import {
  Container,
  Title,
  ConverterBox,
  InputBox,
  Input,
  ButtonBox,
  Button,
  ResponseBox,
  Response,
} from "./styles";

function App() {
  return (
    <Container>
      <div id="Box">
        <div id="Content">
          <Title>Bin2Dec</Title>

          <ConverterBox>
            <form>
              <InputBox>
                <Input onHolder="Either 0 or 1" id="input" />
                <label for="input">Binary</label>
              </InputBox>

              <ResponseBox>
                <Response onHolder="Conversion" id="response" />
                <label for="response">Decimal</label>
              </ResponseBox>

              <ButtonBox>
                <Button>Convert</Button>
              </ButtonBox>
            </form>
          </ConverterBox>

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

export default App;
