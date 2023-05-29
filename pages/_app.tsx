import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "@/components/authGuard";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface App extends AppProps {
  Component: AppProps["Component"] & {
    requireAuth?: boolean;
  };
}

const App = ({ Component, pageProps }: App) => {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
