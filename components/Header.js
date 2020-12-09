import Link from "flareact/link";
import Logo from "./Logo";
import Menu from "./icons/Menu";
import GitHub from "./icons/GitHub";
import DocsSearchInput from "./DocsSearchInput";

export default function Header({ onOpen }) {
  return (
    <nav className="flex items-center h-16 px-6 fixed inset-x-0 top-0 z-20 border-b justify-between bg-gray-100 dark:bg-gray-700 text-black dark:text-white dark:border-gray-600">
      <Link href="/">
        <a>
          <span className="sr-only">Flareact</span>
          <Logo className="fill-current w-40 h-10 block -mt-2" />
        </a>
      </Link>
      <div className="flex items-center">
        <div className="hidden md:block">
          <DocsSearchInput />
        </div>
        <a
          className="block mr-3 md:mr-0"
          href="https://github.com/flareact/flareact"
        >
          <span className="sr-only">Open Flareact on GitHub</span>
          <GitHub className="block w-6 h-6 fill-current" />
        </a>
        <button className="md:hidden" onClick={onOpen}>
          <span className="sr-only">Open Menu</span>
          <Menu className="fill-current w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
