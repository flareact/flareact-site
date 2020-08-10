import Layout from "../../components/Layout";
import Head from "flareact/head";

export async function getEdgeProps({ params }) {
  const { slug } = params;
  const doc = await import(`../../docs/${slug}.md`);

  return {
    props: {
      content: doc.default,
    },
  };
}

export default function Doc({ content }) {
  // TODO: Find a better way to extract title
  const title = `Flareact - ${
    content.match(/<h1.*>(.+)<\/h1>/)?.[1] || "Docs"
  }`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}
