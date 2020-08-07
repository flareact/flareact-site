import Layout from "../../components/Layout";

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
  return (
    <Layout>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}
