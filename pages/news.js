import Link from "flareact/link";
import Head from "flareact/head";
import PageLayout from "../components/PageLayout";
import { postDate } from "../lib/dates";

export async function getEdgeProps() {
  const context = require.context("../news/", true, /\.md$/);

  const posts = context.keys().map((key) => {
    const post = context(key);

    return {
      slug: key.replace(/^\.\//, "").replace(/\.md$/, ""),
      ...post.attributes,
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(a.date) - new Date(b.date)),
    },
    revalidate: 60 * 10,
  };
}

export default function News({ posts }) {
  return (
    <PageLayout>
      <Head>
        <title>Flareact News</title>
      </Head>
      <div className="relative max-w-lg mx-auto lg:max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
            Flareact News
          </h2>
          <div className="mt-3 sm:mt-4">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              The latest on Flareact news, releases, development and more.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.slug}>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                <time dateTime={post.date}>{postDate(post.date)}</time>
              </p>
              <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                <a className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </a>
              </Link>
              <div className="mt-3">
                <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                  <a className="text-base font-semibold text-blue-400 hover:text-blue-600 underline">
                    View post
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
