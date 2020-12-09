import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";

export default function Layout({ children, docs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-50">
      <Header onOpen={() => setOpen(!open)} />
      <div className="flex flex-1 h-full">
        <Sidebar docs={docs} hidden={!open} onClick={() => setOpen(false)} />
        <article className="relative pt-24 pb-16 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
          <main className="max-w-screen-md mx-auto">{children}</main>
        </article>
      </div>
    </div>
  );
}
