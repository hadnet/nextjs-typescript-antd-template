import React from 'react';
import Head from 'next/head';
import {Container, Footer, Grid, Card, Main, Title, Logo, Button, Header} from '@/components';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
        <Button type={`primary`} shape={`round`}>
          Primary Button
        </Button>
      </Main>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Logo src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Footer>
    </Container>
  );
}
