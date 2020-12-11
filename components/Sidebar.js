import Link from "flareact/link";
import { useRouter } from "flareact/router";

export default function Sidebar({ docs = [], hidden, onClick }) {
  return (
    <aside
      className={`h-full bg-black inset-0 flex-none w-full fixed md:w-64 md:block bg-opacity-25 lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="h-full pb-40 bg-white mr-24 overflow-hidden overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-16 lg:mr-0">
        <FadeyBaby />
        <ul
          className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 lg:h-(screen-16)"
          onClick={onClick}
        >
          {docs.map(({ url, title }) => (
            <NavLink key={url} href={url}>
              {title}
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function NavLink({ href, children }) {
  const { asPath } = useRouter();

  const active = asPath == href;

  return (
    <li>
      <Link href="/docs/[slug]" as={href}>
        <a
          className={`p-2 transition-colors duration-200 rounded block ${
            active
              ? "font-bold dark:text-white bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-700"
              : "dark:text-gray-100 hover:text-gray-900 "
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

/**
 * Cheers, tailwindcss.com
 */
function FadeyBaby() {
  return (
    <div className="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"></div>
  );
}
