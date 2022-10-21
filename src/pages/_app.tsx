import type { AppProps } from "next/app";
import "../i18n/index";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "../../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
