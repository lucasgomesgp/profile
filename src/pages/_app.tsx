import "../../styles/fonts.css";
import type { AppProps } from 'next/app'
import "../i18n/index";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
