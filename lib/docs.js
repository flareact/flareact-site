import { renderMarkdown } from "./markdown";

export async function getDocs(slug, branch = "main") {
  const markdown = await fetch(
    `https://raw.githubusercontent.com/flareact/flareact/${branch}/docs/${slug}.md`
  );

  return await renderMarkdown(await markdown.text());
}

export async function getDocsManifest(branch = "main") {
  const response = await fetch(
    `https://raw.githubusercontent.com/flareact/flareact/${branch}/docs/manifest.json`
  );

  return await response.json();
}
