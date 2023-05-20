import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Router from 'next/router';
import Layout from './components/Layout';
import Loader from './components/Loader';

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => setIsLoading(false);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    Router.events.on('routeChangeComplete', handleComplete);

    return () => {
      clearTimeout(timeout);
      Router.events.off('routeChangeComplete', handleComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        {isLoading ? <Loader /> : null}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;