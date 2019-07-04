import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import styled, { createGlobalStyle } from 'styled-components';
import Ledger from '../modules/ledger';

const GlobalStyle = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
`;

const AppContainer = styled.div`
  max-width: 1000px;
  margin: auto;

  @media (max-width: 1200px) {
    max-width: 500px;
  }
`;

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <AppContainer>
        <Paper>
          <Ledger />
        </Paper>
      </AppContainer>
    </>
  );
}

export default App;
