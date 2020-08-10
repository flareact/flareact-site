import Link from "flareact/link";
import { useRouter } from "flareact";

export default function Sidebar({ hidden, onClick }) {
  return (
    <aside
      className={`h-screen bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 ${
        hidden ? "hidden" : ""
      }`}
      style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
    >
      <div className="w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto">
        <ul onClick={onClick}>
          <NavLink href="/docs/getting-started">Getting Started</NavLink>
          <NavLink href="/docs/pages">Pages</NavLink>
          <NavLink href="/docs/data-fetching">Data Fetching</NavLink>
        </ul>
      </div>
    </aside>
  );
}

function NavLink({ href, children }) {
  const { pathname } = useRouter();

  const active = pathname == href;

  return (
    <li>
      <Link href={href}>
        <a
          className={`p-2 hover:bg-gray-200 block ${
            active ? "font-bold text-gray-800" : "text-gray-600"
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
