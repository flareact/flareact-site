const marked = require("marked");
const prism = require("prismjs");

marked.setOptions({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
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

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "markdown-loader",
          options: {
            renderer,
          },
        },
      ],
    });

    return config;
  },
};
