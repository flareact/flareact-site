import Layout from "../components/Layout";
import Content from "../docs/index.md";
import Head from "flareact/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>
          Flareact - Edge-Rendered React Framework built for Cloudflare Workers
        </title>
      </Head>
      <div className="prose" dangerouslySetInnerHTML={{ __html: Content }} />
    </Layout>
  );
}
