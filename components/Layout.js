import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";
import Menu from "./icons/Menu";

export default function Layout({ children, docs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-gray-500 dark:bg-gray-900 dark:text-gray-50">
      <Header onOpen={() => setOpen(!open)} />
      <button
        className="lg:hidden fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-black text-white block"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open Menu</span>
        <Menu className="fill-current w-6 h-6 absolute top-1/2 left-1/2 -mt-3 -ml-3" />
      </button>
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
