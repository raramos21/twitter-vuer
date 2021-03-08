module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/twitter/'
      : '/',
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = "Twitter Vue";
          return args;
      })
    }
  }