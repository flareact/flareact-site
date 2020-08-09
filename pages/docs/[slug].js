import Layout from "../../components/Layout";
import Head from "flareact/head";

export async function getStaticProps({ params }) {
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
  const title = content.match(/<h1.*>(.+)<\/h1>/)?.[1] || "Docs";

  return (
    <Layout>
      <Head>
        <title>Flareact - {title}</title>
      </Head>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}
