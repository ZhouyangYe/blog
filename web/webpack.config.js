var path = require("path");

var config = {
  entry: ["./src/index.tsx"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  mode: "development",

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: /node_modules/
      },
    ]
  },
  plugins: []
};

module.exports = config;