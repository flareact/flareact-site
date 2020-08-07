const workerConfig = require("flareact/configs/webpack.worker.config");
const path = require("path");

module.exports = {
  ...workerConfig,
  target: "webworker",
  resolve: {
    // Only necessary for localdev of flareact
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
};
