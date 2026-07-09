import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import type { AppProps } from "next/app";
import { WishlistProvider } from "@/context/WishlistContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </LanguageProvider>
  );
}
