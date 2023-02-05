import { createGlobalStyle } from "styled-components";
import Example from "./Componets/Example";

const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`

function App() {
    return (
        <>
            <GlobalStyle />
            <Example />
        </>
    );
}

export default App;