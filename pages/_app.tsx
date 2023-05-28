import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "@/components/authGuard";

interface App extends AppProps {
  Component: AppProps["Component"] & {
    requireAuth?: boolean;
  };
}

const App = ({ Component, pageProps }: App) => (
  <SessionProvider session={pageProps.session}>
    {Component.requireAuth ? (
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    ) : (
      <Component {...pageProps} />
    )}
  </SessionProvider>
);

export default App;
