import Link from "flareact/link";
import { useRouter } from "flareact/router";

export default function Sidebar({ docs = [], hidden, onClick }) {
  return (
    <aside
      className={`h-full bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 ${
        hidden ? "hidden" : ""
      }`}
      style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
    >
      <div className="w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto">
        <ul onClick={onClick}>
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
          className={`p-2 hover:bg-orange-100 block ${
            active ? "font-bold text-gray-800" : "text-gray-600"
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
