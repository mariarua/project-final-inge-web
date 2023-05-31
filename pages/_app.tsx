import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "@/components/authGuard";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { UserContextProvider } from "@/context/UserContext";
import { Enum_RoleName } from "@prisma/client";
import { ToastContainer } from "react-toastify";
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
            <AuthGuard roles={Component.roles as Enum_RoleName[]}>
              <Component {...pageProps} />
            </AuthGuard>
          </UserContextProvider>
        ) : (
          <Component {...pageProps} />
        )}
        <ToastContainer />
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
