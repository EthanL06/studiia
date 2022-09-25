import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TermsContextProvider } from "contexts/TermsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TermsContextProvider>
      <Component {...pageProps} />
    </TermsContextProvider>
  );
}

export default MyApp;
