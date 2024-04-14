module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
};
