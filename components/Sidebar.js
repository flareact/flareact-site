import Link from "flareact/link";
import { useRouter } from "flareact";

export default function Sidebar({ hidden, onClick }) {
  return (
    <aside
      className={`h-full bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 ${
        hidden ? "hidden" : ""
      }`}
      style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
    >
      <div className="w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto">
        <ul onClick={onClick}>
          <NavLink href="/docs/getting-started">Getting Started</NavLink>
          <NavLink href="/docs/pages">Pages</NavLink>
          <NavLink href="/docs/data-fetching">Data Fetching</NavLink>
          <NavLink href="/docs/dynamic-routes">Dynamic Routes</NavLink>
          <NavLink href="/docs/api-routes">API Routes</NavLink>
          <NavLink href="/docs/built-in-css-support">
            Built-in CSS Support
          </NavLink>
          <NavLink href="/docs/static-file-serving">
            Static File Serving
          </NavLink>
          <NavLink href="/docs/fast-refresh">Fast Refresh</NavLink>
          <NavLink href="/docs/deployment">Deployment</NavLink>
          <NavLink href="/docs/custom-app-page">Custom App Page</NavLink>
          <NavLink href="/docs/custom-postcss-config">
            Custom PostCSS Config
          </NavLink>
          <NavLink href="/docs/custom-webpack-config">
            Custom Webpack Config
          </NavLink>
          <NavLink href="/docs/comparison-to-nextjs">
            Comparison to Next.js
          </NavLink>
          <NavLink href="/docs/flareact-link">flareact/link</NavLink>
          <NavLink href="/docs/flareact-head">flareact/head</NavLink>
          <NavLink href="/docs/flareact-router">useRouter</NavLink>
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
