import { NextPage } from 'next';
import Head from 'next/head';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a> integrated with{' '}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <Button variant="contained">Outlined</Button>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
