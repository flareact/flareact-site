import PageLayout from "../../components/PageLayout";
import { renderMarkdown } from "../../lib/markdown";
import useMarkdownClicks from "../../lib/use-markdown-clicks";
import { format } from "date-fns";
import { postDate } from "../../lib/dates";
import { atRule } from "postcss";
import { Seo } from "../../components/Seo";

export async function getEdgeProps({ params }) {
  const { slug } = params;

  const { default: markdown } = await import(`../../news/${slug}.md`);
  const { markdown: content } = await renderMarkdown(markdown.body);

  return {
    props: {
      attributes: markdown.attributes,
      content,
    },
    revalidate: 60 * 10,
  };
}

export default function NewsItem({ attributes, content }) {
  const { container } = useMarkdownClicks(content);

  return (
    <PageLayout>
      <Seo
        description={attributes.excerpt}
        title={attributes.title}
        image={attributes.image}
      />
      <article
        className="relative max-w-lg mx-auto lg:max-w-4xl"
        ref={container}
      >
        <header className="text-center space-y-1 pt-10">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight md:text-5xl pb-4 text-gray-900 dark:text-gray-100">
              {attributes.title}
            </h1>
          </div>
          <dl className="space-y-10 pb-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                <time dateTime={attributes.date}>
                  {postDate(attributes.date)}
                </time>
              </dd>
            </div>
          </dl>
        </header>
        <main className="pt-10">
          <div
            className="prose dark:prose-dark mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </main>
      </article>
    </PageLayout>
  );
}
