import Sidebar from "./Sidebar";
import Link from "flareact/link";
import Logo from "./Logo";
import Menu from "./icons/Menu";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <nav className="flex items-center h-16 px-6 fixed inset-x-0 top-0 z-20 border-b bg-white justify-between">
        <Link href="/">
          <a>
            <span className="sr-only">Flareact</span>
            <Logo className="fill-current w-32 h-12 block" />
          </a>
        </Link>
        <div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open Menu</span>
            <Menu className="fill-current w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="flex flex-1 h-full">
        <Sidebar hidden={!open} onClick={() => setOpen(false)} />
        <article className="relative pt-20 pb-16 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
          <main className="max-w-screen-md mx-auto">{children}</main>
        </article>
      </div>
    </div>
  );
}
