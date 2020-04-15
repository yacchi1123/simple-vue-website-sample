module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/common/_mixin.scss";'
      }
    }
  }
}
