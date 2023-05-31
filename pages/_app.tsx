import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "@/components/authGuard";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { UserContextProvider } from "@/context/UserContext";

interface App extends AppProps {
  Component: AppProps["Component"] & {
    requireAuth?: boolean;
    roles?: string[];
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
          <UserContextProvider>
            <AuthGuard roles={Component.roles}>
              <Component {...pageProps} />
            </AuthGuard>
          </UserContextProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
