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
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Se a imagem for menor que 8 KB, ela será incorporada como um URL de dados
              name: "images/[name].[ext]", // Diretório de saída para imagens
            },
          },
        ],
      },
    ],
  },
};
