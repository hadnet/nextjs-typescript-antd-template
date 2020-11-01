import React, {useState} from 'react';
import Head from 'next/head';
import {Button as AntdButton, Row, Col} from 'antd';
import {useThemeSwitcher} from 'react-css-theme-switcher';
import {ThemeProvider} from 'styled-components';
import {Container, Footer, Grid, Card, Main, Title, VercelLogo, Button, Header} from '@/components';
import {white, black, styledDark, styledLight} from '@/styles/styledThemeColors';

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  const {switcher, themes} = useThemeSwitcher();

  const toggleTheme = (isChecked: boolean) => {
    setDark(isChecked);
    switcher({theme: isChecked ? themes.dark : themes.light});
  };
  return (
    <ThemeProvider theme={dark ? styledDark : styledLight}>
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header dark={dark} setDark={toggleTheme} />
        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js with Styled Components and Ant Design dynamic theme!</a>
          </Title>
          <Grid>
            <Card href="https://nextjs.org/docs">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Card>
          </Grid>
          <Row justify={`space-between`}>
            <Col xs={4} lg={8} offset={1} style={{display: 'flex', justifyContent: 'center'}}>
              <Button type={`primary`}>Styled Button</Button>
            </Col>
            <Col xs={4} lg={8} style={{display: 'flex', justifyContent: 'center'}}>
              <AntdButton type={`primary`}>Antd Button</AntdButton>
            </Col>
          </Row>
        </Main>
        <Footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <VercelLogo fill={dark ? white : black} width={`70`} height={`16`} />
          </a>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}
