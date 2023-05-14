import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import "@/styles/app.css";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="my-20"></div>
      <Component {...pageProps} />
      <Footer />
      <div className="relative">
        <div className="fixed bottom-0 right-0 p-5 transform transition hover:-translate-y-2">
          <Link
            href="https://wa.me/message/7N2ID7LCRUUNM1"
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            <img
              alt="Chat on WhatsApp"
              className="w-56 h-auto"
              src="images/logo/WhatsAppButtonGreenSmall.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
