import Layout from "../components/Layout";
import Head from "flareact/head";
import { getDocs, getDocsManifest } from "../lib/docs";

export async function getEdgeProps() {
  const [content, manifest] = await Promise.all([
    getDocs("index"),
    getDocsManifest(),
  ]);

  return {
    props: {
      content,
      manifest,
    },
    revalidate: 60 * 5,
  };
}

export default function Index({ content, manifest }) {
  return (
    <Layout docs={manifest}>
      <Head>
        <title>
          Flareact - Edge-Rendered React Framework built for Cloudflare Workers
        </title>
        <meta
          name="description"
          content="Flareact is an edge-rendered React framework built for Cloudflare Workers. It features file-based page routing with dynamic page paths and edge-side data fetching APIs."
        />
      </Head>
      <div
        className="prose dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}
