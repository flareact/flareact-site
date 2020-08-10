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
