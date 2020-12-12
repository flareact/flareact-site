import "../styles/styles.css";
import "../styles/syntax.css";
import "../styles/docsearch.css";
import Head from "flareact/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
