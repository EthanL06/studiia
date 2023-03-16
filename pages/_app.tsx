import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TermsContextProvider } from "contexts/TermsContext";
import { NavbarContextProvider } from "@/contexts/NavbarContext";
import Navbar from "@/components/global/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarContextProvider>
      <TermsContextProvider>
        <Component {...pageProps} />
      </TermsContextProvider>
    </NavbarContextProvider>
  );
}

export default MyApp;
