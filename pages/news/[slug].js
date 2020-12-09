import PageLayout from "../../components/PageLayout";

export default function NewsItem() {
  return (
    <PageLayout>
      <article className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-4xl">
        <header className="text-center mt-12 space-y-1">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime="2020-11-18T17:45:00.000Z">
                  Wednesday, November 18, 2020
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight md:text-5xl pb-10">
              This is a news article
            </h1>
          </div>
        </header>
        <main className="pt-10">
          <div className="prose dark:prose-dark">
            <p>Hello</p>
          </div>
        </main>
      </article>
    </PageLayout>
  );
}
