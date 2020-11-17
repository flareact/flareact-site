export async function getDocs(slug) {
  /**
   * These are dynamic imports inside this method. Otherwise,
   * they would be imported statically and included in the client
   * bundle. This block is tree-shaken with Flareact's client babel loader.
   */
  const { default: marked } = await import("marked");
  const { default: hljs } = await import("highlight.js");

  const renderer = new marked.Renderer();

  renderer.heading = (text, level) => {
    if (level === 1) {
      return `<h1>${text}</h1>`;
    }

    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
    <h${level} class="group">
      <span class="subnav-anchor" id="${escapedText}"></span>
      ${text}
      <a class="anchor-link" href="#${escapedText}">
        <span class="group-hover:opacity-100 opacity-0 text-gray-600" aria-hidden="true">#</span>
      </a>
    </h${level}>`;
  };

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code, ["js"]).value;
    },
    renderer,
  });

  const markdown = await fetch(
    `https://raw.githubusercontent.com/flareact/flareact/main/docs/${slug}.md`
  );

  return marked(await markdown.text());
}
