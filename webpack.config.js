const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "static/js/dist")
  },
  node: {
    fs: "empty"
  },
  optimization: {
  	minimize: false
  }
};
