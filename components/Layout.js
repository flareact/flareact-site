import Sidebar from "./Sidebar";
import BaseLayout from "./BaseLayout";
import { useLayout } from "../lib/use-layout";

export default function Layout({ children, docs, subheadings }) {
  return (
    <BaseLayout hasSidebar={true}>
      <div className="lg:flex">
        <Sidebar docs={docs} subheadings={subheadings} />
        <Container>
          <div className="pt-10 pb-24 lg:pb-16 w-full flex">
            <main className="min-w-0 flex-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </Container>
      </div>
    </BaseLayout>
  );
}

function Container({ children }) {
  const { open } = useLayout();

  return (
    <article
      className={`min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible ${
        open ? "fixed" : ""
      }`}
    >
      {children}
    </article>
  );
}
