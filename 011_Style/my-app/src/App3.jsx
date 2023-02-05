import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
  border: 1px solid black;
`

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello' ? 'red' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`

function App() {
    return (
        <ContentDiv>
            <ContentH2 name='hello1'>Q&A</ContentH2>
            <p>Lorem ipsum</p>
        </ContentDiv>
    );
}

export default App;