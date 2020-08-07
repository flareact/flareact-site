export default function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <nav>Flareact</nav>
      <div className="flex flex-1 h-full">
        <aside>Sidebar</aside>
        <article>
          <main>{children}</main>
        </article>
      </div>
    </div>
  );
}
