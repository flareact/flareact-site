import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";

export default function Layout({ children, docs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-gray-500 dark:bg-gray-900 dark:text-gray-50">
      <Header onOpen={() => setOpen(!open)} />
      <div className="max-w-8xl w-full mx-auto">
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
      </div>
    </div>
  );
}
