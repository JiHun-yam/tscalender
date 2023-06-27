import React from 'react';
import './App.css';
import styled from 'styled-components';
import Main from "./components/Main"

function App() {
  return (
    <Container>
    <Main/>
    </Container>
  );
}

export default App;

const Container= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;