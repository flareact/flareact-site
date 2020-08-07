import Sidebar from "./Sidebar";
import Link from "flareact/link";
import Logo from "./Logo";

export default function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <nav className="flex items-center h-16 px-6 fixed inset-x-0 top-0 z-20 border-b bg-white">
        <Link href="/">
          <a>
            <span className="sr-only">Flareact</span>
            <Logo className="fill-current w-32 h-12 block" />
          </a>
        </Link>
      </nav>
      <div className="flex flex-1 h-full">
        <Sidebar />
        <article className="relative pt-20 pb-16 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
          <main className="max-w-screen-md mx-auto">{children}</main>
        </article>
      </div>
    </div>
  );
}
