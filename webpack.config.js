module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },module: {
    loaders: [
      {test: /\.js$/
      , loader: "babel"
      ,query: {
        optional: ['es7.decorators'],
        stage: 0
      }
      }
    ]
  }
}
