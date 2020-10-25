import { useEffect, useRef } from "react";

export default function DocsSearchInput() {
  const input = useRef();

  useEffect(() => {
    const inputs = ["input", "select", "button", "textarea"];

    const down = (e) => {
      if (
        document.activeElement &&
        inputs.indexOf(document.activeElement.tagName.toLowerCase() !== -1)
      ) {
        if (e.key === "/") {
          e.preventDefault();
          input.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    let timeout;

    function tryEnableDocSearch() {
      if (!window.docsearch) {
        timeout = setTimeout(tryEnableDocSearch, 500);
        return;
      }

      window.docsearch({
        apiKey: "450e58b4ff73372d228a59a6eab57613",
        indexName: "flareact",
        inputSelector: "#docs-search",
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    }

    tryEnableDocSearch();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <input
      className="py-2 px-3 appearance-none placeholder-gray-500 mr-2 border rounded focus:outline-none text-gray-700 focus:shadow-outline"
      id="docs-search"
      placeholder={`Search ("/" to focus)`}
      type="search"
      ref={input}
    />
  );
}
