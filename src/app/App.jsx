import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled, { ThemeProvider } from 'styled-components';
import Ledger from '../modules/ledger';
import GlobalStyle from './globalStyle';
import theme from './theme';

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Paper>
            <Ledger />
          </Paper>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
