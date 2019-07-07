import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Dashboard from '../modules/dashboard';
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
            <Dashboard />
          </AppContainer>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
