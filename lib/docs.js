import marked from "marked";
import prism from "prismjs";
import fetch from "node-fetch";

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
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
  renderer,
});

export async function getDocs(slug) {
  const markdown = await fetch(
    `https://raw.githubusercontent.com/flareact/flareact/main/docs/${slug}.md`
  );

  return marked(await markdown.text());
}
