import PageLayout from "../components/PageLayout";

export default function News() {
  return (
    <PageLayout>
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            News
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">
              The latest on Flareact news, releases, development and more.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div>
            <p className="text-sm text-gray-500">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                Boost your conversion rate
              </p>
              <p className="mt-3 text-base text-gray-500">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta.
              </p>
            </a>
            <div className="mt-3">
              <a
                href="#"
                className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read full story
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              <time dateTime="2020-03-10">Mar 10, 2020</time>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                How to use search engine optimization to drive sales
              </p>
              <p className="mt-3 text-base text-gray-500">
                Optio cum necessitatibus dolor voluptatum provident commodi et.
                Qui aperiam fugiat nemo cumque.
              </p>
            </a>
            <div className="mt-3">
              <a
                href="#"
                className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read full story
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              <time dateTime="2020-02-12">Feb 12, 2020</time>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                Improve your customer experience
              </p>
              <p className="mt-3 text-base text-gray-500">
                Cupiditate maiores ullam eveniet adipisci in doloribus nulla
                minus. Voluptas iusto libero adipisci rem et corporis.
              </p>
            </a>
            <div className="mt-3">
              <a
                href="#"
                className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read full story
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              <time dateTime="2020-01-29">Jan 29, 2020</time>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                Writing effective landing page copy
              </p>
              <p className="mt-3 text-base text-gray-500">
                Ipsum voluptates quia doloremque culpa qui eius. Id qui id
                officia molestias quaerat deleniti. Qui facere numquam autem
                libero quae cupiditate asperiores vitae cupiditate. Cumque id
                deleniti explicabo.
              </p>
            </a>
            <div className="mt-3">
              <a
                href="#"
                className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read full story
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
