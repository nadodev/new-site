const path = require("path");

module.exports = {
  entry: "./main.js", // Arquivo JavaScript de entrada
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
      },
    ],
  },
};
