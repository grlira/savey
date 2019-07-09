import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StylesProvider } from '@material-ui/styles';
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
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <AppContainer>
              <Dashboard />
            </AppContainer>
          </>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default App;
