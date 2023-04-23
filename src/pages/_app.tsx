import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap");
        </style>
        <script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
