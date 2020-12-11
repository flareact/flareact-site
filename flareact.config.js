module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "frontmatter-markdown-loader",
          options: {
            mode: ["body"],
          },
        },
      ],
    });

    return config;
  },
};
