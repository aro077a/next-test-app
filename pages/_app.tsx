import * as React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </>
    </Layout>
  );
};

export default MyApp;
