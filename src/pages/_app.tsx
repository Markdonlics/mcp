import { Nav } from "@/components";
import "@/styles/app.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="my-20"></div>
      <Component {...pageProps} />
    </>
  );
}
