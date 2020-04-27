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
                <Input onHolder="Either 0 or 1" />
                <label>Binary</label>
              </InputBox>

              <ResponseBox>
                <label>Decimal</label>
                <Response onHolder="Conversion" />
              </ResponseBox>
            </form>
          </ConverterBox>

          <Button
            onClick={() => {
              window.alert("Onde a resposta em número decimal poderia sair!");
            }}
          >
            Convert
          </Button>

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
