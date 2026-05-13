import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { WishlistProvider } from "@/context/WishlistContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}
