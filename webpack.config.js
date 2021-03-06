// Purpose of this file is to export an object
// This object lets you configure what webpack does

module.exports = {
  entry: './app/app.jsx',
  output: {
    // __dirname gives us path of current file
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: ['src', 'node_modules', 'ReactWeather'],
    //Aliases let us name our modules, makes it easy for us to require our modules.
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
