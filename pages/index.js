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
        <meta
          name="description"
          content="Flareact is an edge-rendered React framework built for Cloudflare Workers. It features file-based page routing with dynamic page paths and **edge-side data fetching APIs."
        />
      </Head>
      <div className="prose" dangerouslySetInnerHTML={{ __html: Content }} />
    </Layout>
  );
}
