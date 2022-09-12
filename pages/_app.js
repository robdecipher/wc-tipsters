import Layout from '../components/layout/layout';
import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
