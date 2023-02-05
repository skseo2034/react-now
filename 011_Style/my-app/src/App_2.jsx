import { createGlobalStyle } from "styled-components";
import Example from "./Componets/Example";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  span {
    color: red;
    font-size: 12px;
  }

  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

  * {
    box-sizing: border-box;
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