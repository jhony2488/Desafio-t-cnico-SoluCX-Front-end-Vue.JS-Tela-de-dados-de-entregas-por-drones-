/* eslint-disable no-param-reassign */
module.exports = {
  devServer: { host: 'localhost', port: '8080' },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/sass/main.scss";
        `,
      },
    },
  },
}
