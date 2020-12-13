import Link from "flareact/link";
import { useRouter } from "flareact/router";
import { useLayout } from "../lib/use-layout";

export default function Sidebar({ docs = [], subheadings = [] }) {
  const { open, setOpen } = useLayout();
  const { asPath } = useRouter();
  const hidden = !open;

  const onClick = () => setOpen(false);

  return (
    <aside
      className={`h-full bg-black inset-0 flex-none w-full fixed z-40 bg-opacity-25 lg:bg-white lg:dark:bg-gray-900 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${
        hidden ? "hidden" : ""
      }`}
      onClick={() => {
        if (!open) return;

        setOpen(false);
      }}
    >
      <div className="h-full bg-white dark:bg-gray-900 mr-24 overflow-hidden overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-16 lg:mr-0">
        <FadeyBaby />
        <ul
          className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 lg:h-(screen-16)"
          onClick={onClick}
        >
          {docs.map(({ url, title }) => {
            return (
              <li key={url}>
                <NavLink href={url}>{title}</NavLink>
                {Boolean(asPathIsActive(asPath, url) && subheadings.length) && (
                  <SubNav subheadings={subheadings} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function NavLink({ href, children }) {
  const { asPath } = useRouter();

  const active = asPathIsActive(asPath, href);

  return (
    <Link href="/docs/[slug]" as={href}>
      <a
        className={`p-2 transition-colors duration-200 rounded block ${
          active
            ? "font-bold bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-700"
            : "dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}

function SubNav({ subheadings }) {
  return (
    <ul className="py-2 pl-4 text-sm text-gray-400">
      {subheadings.map((heading) => (
        <li key={heading}>
          <a
            href={
              "#" +
              heading
                .toLowerCase()
                .replace(/[ </>]/g, "-")
                .replace(/--/g, "-")
            }
            className="py-1 block hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {stripTags(heading)}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Cheers, tailwindcss.com
 */
function FadeyBaby() {
  return (
    <div className="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white dark:from-gray-900"></div>
  );
}

function asPathIsActive(asPath, url) {
  return asPath.split("#")[0] === url;
}

function stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, "");
}
