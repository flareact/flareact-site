import PageLayout from "../../components/PageLayout";
import { renderMarkdown } from "../../lib/markdown";

export async function getEdgeProps({ params }) {
  const { slug } = params;

  const { default: markdown } = await import(`../../news/${slug}.md`);
  const content = await renderMarkdown(markdown.body);

  return {
    props: {
      attributes: markdown.attributes,
      content,
    },
    revalidate: 60 * 10,
  };
}

export default function NewsItem({ attributes, content }) {
  return (
    <PageLayout>
      <article className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-4xl">
        <header className="text-center mt-12 space-y-1">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={attributes.date}>{attributes.date}</time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight md:text-5xl pb-10">
              {attributes.title}
            </h1>
          </div>
        </header>
        <main className="pt-10">
          <div
            className="prose dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </main>
      </article>
    </PageLayout>
  );
}
