import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/app/theme';
import GlobalStyle from '../src/app/globalStyle';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

const withThemeProvider = cb => <ThemeProvider theme={theme}>{cb()}</ThemeProvider>;

addDecorator(withGlobal);
addDecorator(withThemeProvider);
configure(loadStories, module);
