import Layout from "../../components/Layout";
import Head from "flareact/head";
import { useEffect, useRef } from "react";
import { useRouter } from "flareact/router";
import { getDocs } from "../../lib/docs";

export async function getEdgeProps({ params }) {
  const { slug } = params;

  return {
    props: {
      content: await getDocs(slug),
    },
    revalidate: 60 * 5,
  };
}

export default function Doc({ content }) {
  // TODO: Find a better way to extract title
  const title = `Flareact - ${
    content.match(/<h1.*>(.+)<\/h1>/)?.[1] || "Docs"
  }`;
  const router = useRouter();
  const container = useRef();

  // Listen for clicks inside documentation, and use the router context to navigate
  // rather than full page loads.
  useEffect(() => {
    function handleClick(e) {
      e.preventDefault();
      const { pathname } = new URL(e.target.href);

      router.push("/docs/[slug]", pathname);
    }

    if (!container) return;
    var links = [...container.current.querySelectorAll('a[href^="/"]')];

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        ref={container}
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}
