import Layout from "../../components/Layout";
import Head from "flareact/head";
import { getDocs, getDocsManifest } from "../../lib/docs";
import useMarkdownClicks from "../../lib/use-markdown-clicks";

export async function getEdgeProps({ params }) {
  const { slug } = params;

  const [{ markdown: content, subheadings }, manifest] = await Promise.all([
    getDocs(slug),
    getDocsManifest(),
  ]);

  return {
    props: {
      content,
      subheadings,
      manifest,
    },
    revalidate: 60 * 5,
  };
}

export default function Doc({ content, subheadings, manifest }) {
  // TODO: Find a better way to extract title
  const title = `Flareact - ${
    content.match(/<h1.*>(.+)<\/h1>/)?.[1] || "Docs"
  }`;
  const { container } = useMarkdownClicks(content);

  return (
    <Layout docs={manifest} subheadings={subheadings}>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        ref={container}
        className="prose dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}
