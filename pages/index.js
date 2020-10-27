import Layout from "../components/Layout";
// import Content from "../docs/index.md";
import Head from "flareact/head";
import fetch from "node-fetch";
import marked from "marked";

export async function getEdgeProps() {
  const markdown = await fetch(
    `https://raw.githubusercontent.com/flareact/flareact/main/docs/index.md`
  );

  return {
    props: {
      content: marked(await markdown.text()),
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
