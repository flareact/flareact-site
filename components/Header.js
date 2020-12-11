import Link from "flareact/link";
import Logo from "./Logo";
import Menu from "./icons/Menu";
import GitHub from "./icons/GitHub";
import DocsSearchInput from "./DocsSearchInput";

export default function Header({ onOpen }) {
  return (
    <nav className="flex sticky max-w-8xl mx-auto w-full top-0 z-50 bg-white dark:bg-black dark:text-white">
      <div className="flex-none pl-4 flex items-center lg:w-60 xl:w-72 xl:pl-8">
        <Link href="/">
          <a className="w-40">
            <span className="sr-only">Flareact</span>
            <Logo className="fill-current w-auto h-8 -mt-2" />
          </a>
        </Link>
      </div>
      <div className="flex-auto flex items-center h-16 border-b border-gray-200 justify-between px-4">
        <div className="hidden md:block">
          <DocsSearchInput />
        </div>
        <div className="flex space-x-6 md:space-x-10">
          <Link href="/news">
            <a className="hover:text-gray-600 duration-200 font-medium transition-colors">
              News
            </a>
          </Link>
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
      </div>
    </nav>
  );
}
