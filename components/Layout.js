import Sidebar from "./Sidebar";
import Link from "flareact/link";
import Logo from "./Logo";
import Menu from "./icons/Menu";
import { useState } from "react";
import GitHub from "./icons/GitHub";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <nav className="flex items-center h-16 px-6 fixed inset-x-0 top-0 z-20 border-b justify-between bg-gray-100">
        <Link href="/">
          <a>
            <span className="sr-only">Flareact</span>
            <Logo className="fill-current w-40 h-10 block -mt-2" />
          </a>
        </Link>
        <div className="flex">
          <a
            className="block mr-3 md:mr-0"
            href="https://github.com/flareact/flareact"
          >
            <span className="sr-only">Open Flareact on GitHub</span>
            <GitHub className="block w-6 h-6 fill-current" />
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open Menu</span>
            <Menu className="fill-current w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="flex flex-1 h-full">
        <Sidebar hidden={!open} onClick={() => setOpen(false)} />
        <article className="relative pt-24 pb-16 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
          <main className="max-w-screen-md mx-auto">{children}</main>
        </article>
      </div>
    </div>
  );
}
