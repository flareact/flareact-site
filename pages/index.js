import Layout from "../components/Layout";
import Head from "flareact/head";
import { getDocs } from "../lib/docs";

export async function getEdgeProps() {
  return {
    props: {
      content: await getDocs("index"),
    },
    revalidate: 60,
  };
}

export default function Index({ content }) {
  return (
    <Layout>
      <Head>
        <title>
          Flareact - Edge-Rendered React Framework built for Cloudflare Workers
        </title>
        <meta
          name="description"
          content="Flareact is an edge-rendered React framework built for Cloudflare Workers. It features file-based page routing with dynamic page paths and edge-side data fetching APIs."
        />
      </Head>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}
