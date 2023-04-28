/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/main.scss';
import { Main } from '@layout';

import type { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Main>
    <Component { ...pageProps } />
  </Main>
);

export default MyApp;
