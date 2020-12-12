import Sidebar from "./Sidebar";
import BaseLayout from "./BaseLayout";

export default function Layout({ children, docs }) {
  return (
    <BaseLayout>
      <div className="lg:flex">
        <Sidebar docs={docs} hidden={!open} onClick={() => setOpen(false)} />
        <article className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="mt-10 pb-24 lg:pb-16 w-full flex">
            <main className="min-w-0 flex-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </article>
      </div>
    </BaseLayout>
  );
}
