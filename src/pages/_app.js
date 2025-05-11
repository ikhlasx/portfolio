import '../styles/globals.css'
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Load FontAwesome icons script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Ikhlas PV - AI Engineer and Full-Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ikhlas PV | AI Engineer & Full-Stack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;