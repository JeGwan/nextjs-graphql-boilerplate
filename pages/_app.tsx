import "@styles/global.scss";
import { AppContextProvider } from "@lib/context";
import { AppProps } from "next/app";
import { useApollo } from "@lib/apollo";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ApolloProvider>
  );
}
