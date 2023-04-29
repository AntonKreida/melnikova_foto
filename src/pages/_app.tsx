/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/main.scss';
import { Container } from '@layout';

import type { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Component { ...pageProps } />
  </Container>
);

export default MyApp;
