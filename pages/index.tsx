import React, {useState} from 'react';
import Head from 'next/head';
import {Container, Footer, Grid, Card, Main, Title, VercelLogo, Button, Header} from '@/components';
import {Button as AntdButton, Row, Col} from 'antd';

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header dark={dark} setDark={setDark} />
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js with Styled Components!</a>
        </Title>
        <Grid>
          <Card href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
        </Grid>
        <Row justify="space-between">
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
          Powered by <VercelLogo fill={dark ? '#fff' : '#000'} width={`70`} height={`16`} />
        </a>
      </Footer>
    </Container>
  );
}
