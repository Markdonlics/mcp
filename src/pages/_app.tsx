import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import "@/styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="my-20"></div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
