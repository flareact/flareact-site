import Layout from "../components/Layout";
import Content from "../docs/index.md";

export default function Index() {
  return (
    <Layout>
      <div className="prose" dangerouslySetInnerHTML={{ __html: Content }} />
    </Layout>
  );
}
