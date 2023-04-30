import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CRM Project</title>
        <meta name='description' content='Crm project' />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
