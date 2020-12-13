import { useEffect, useRef } from "react";
import { useRouter } from "flareact/router";

// Listen for clicks inside documentation, and use the router context to navigate
// rather than full page loads.
export default function useMarkdownClicks(content) {
  const container = useRef();
  const router = useRouter();

  useEffect(() => {
    function handleClick(e) {
      e.preventDefault();
      const { pathname } = new URL(e.target.href);

      router.push("/docs/[slug]", pathname);
    }

    if (!container) return;
    var links = [...container.current.querySelectorAll('a[href^="/"]')];

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, [container, content]);

  return { container };
}
