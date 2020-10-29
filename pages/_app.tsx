import React from 'react';
import {AppProps} from 'next/app';
import {createGlobalStyle, ThemeProvider, DefaultTheme} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme: DefaultTheme = {
  dark: {
    primary: '#0070f3',
    border: '#eaeaea',
    color: '#ffffff',
  },
  light: {
    primary: '#3b94ff',
    border: '#eaeaea',
    color: '#161616',
  },
};

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
