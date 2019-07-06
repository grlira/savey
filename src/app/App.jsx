import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Ledger from '../modules/ledger';
import GlobalStyle from './globalStyle';
import theme from './theme';
import store from './store';

const AppContainer = styled.div`
  max-height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <AppContainer>
            <Ledger />
          </AppContainer>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
