import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {createGlobalStyle, ThemeProvider, DefaultTheme} from 'styled-components';
import changeTheme from 'next-dynamic-antd-theme';
import {secondaryColor} from '@/styles/themeColors';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme: DefaultTheme = {
  dark: {
    primary: secondaryColor,
    border: '#eaeaea',
    color: '#ffffff',
  },
  light: {
    primary: secondaryColor,
    border: '#eaeaea',
    color: '#161616',
  },
};

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    changeTheme('default');
  });
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
