import React from 'react';
import {AppProps} from 'next/app';
import {createGlobalStyle, ThemeProvider, DefaultTheme} from 'styled-components';
import {ThemeSwitcherProvider} from 'react-css-theme-switcher';
import secondaryColor from '@/styles/themeColors';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const themes = {
  dark: `dark-theme.css`,
  light: `default-theme.css`,
};

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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
          <Component {...pageProps} />
        </ThemeSwitcherProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
