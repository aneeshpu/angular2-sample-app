module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },module: {
    loaders: [
      {test: /\.js$/,exclude: /(node_modules|bower_components)/, loader: "babel"}
    ]
  }
}
