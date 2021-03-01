const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  context: __dirname,
  entry: "./businesses_of_the_earth.jsx",
  output: {
    path: path.resolve(__dirname, "assets", "javascripts"),
    filename: "bundle.js",
  },
  plugins: 
    [
  new Dotenv()
],
  module: {

    
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
        {
    test: /\.(jpe?g|png|gif|svg)$/i, 
    loader: 'file-loader',
    options: {
      name: 'assets/images/[name].[ext]'
        }
    }
    ],
    

  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  
  
};


