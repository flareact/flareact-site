export default function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <nav className="flex items-center h-16 mx-6 fixed inset-x-0 top-0 z-20 border-b bg-white">
        <a>Flareact</a>
      </nav>
      <div className="flex flex-1 h-full">
        <aside
          className="h-screen bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 hidden"
          style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
        >
          <div className="w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto">
            Sidebar
          </div>
        </aside>
        <article className="relative pt-20 pb-16 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
          <main className="max-w-screen-md mx-auto">{children}</main>
        </article>
      </div>
    </div>
  );
}
