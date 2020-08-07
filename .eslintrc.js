module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es2017: true,
    browser: true,
    node: true,
  },
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
  },
};
