import Link from "flareact/link";

export default function Sidebar() {
  return (
    <aside
      className="h-screen bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 hidden"
      style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
    >
      <div className="w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto">
        <ul>
          <li>
            <Link href="/docs/getting-started">
              <a>Getting Started</a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
