import React from 'react';
import {AppProps} from 'next/app';
import {createGlobalStyle} from 'styled-components';
import {ThemeSwitcherProvider} from 'react-css-theme-switcher';
import '@/public/default-theme.css';

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

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
        <Component {...pageProps} />
      </ThemeSwitcherProvider>
    </>
  );
}

export default MyApp;
