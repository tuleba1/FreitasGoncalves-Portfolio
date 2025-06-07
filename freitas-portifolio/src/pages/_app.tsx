import '../styles/globals.css'; // Importe seu CSS global
import { AppProps } from 'next/app';
import DefaultLayout from '../../src/layout/DefaultLayout'; // Importe o layout

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
