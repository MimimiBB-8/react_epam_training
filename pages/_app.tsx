import React, { FC } from 'react';
import { AppProps } from 'next/app'
import '../styles/global.css'
import NextHead from 'next/head'
import { GlobalLayout } from '../layouts/layout';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalLayout>
      <NextHead><title>{'Netflix'}</title></NextHead><Component {...pageProps} />
    </GlobalLayout>
  )
};

export default App;