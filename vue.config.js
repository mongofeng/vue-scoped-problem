/* eslint-disable  */


const { name } = require('./package');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const date = new Date();
const buildConfig = `date: ${date.toLocaleString()}`
let serverPath = process.env.VUE_APP_SERVER_PATH;
console.log(serverPath)
module.exports = {
  lintOnSave: false,
  publicPath: serverPath,

  productionSourceMap: false,

  configureWebpack: (config) => {
    config.externals = { 
      ...config.externals,
    }
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  

    )
    if (process.env.NODE_ENV === "production") {
      //gzip压缩
  
      config.plugins.push(
        new CompressionWebpackPlugin({
          //匹配规格
          test: /\.js$|\.html$|\.css$|\.png$/,
          //文件超过多大进行压缩
          threshold: 10240,
          //是否删除源文件（建议不删除）
          deleteOriginalAssets: false
        })

      )
    } else {
      // 为开发环境修改配置...
      // config.resolve.alias = {
      //   vue$: "vue/dist/vue.esm.js",
      // };
    }


    config.output = {
      ...config.output,
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },



  css: {
    loaderOptions: {
      //这只主题样式，修改此文件后需要重新启动
      less: {
        lessOptions: {
          modifyVars: {
            //这是配置css主题色
            "primary-color": "#007AFF",
          },
          javascriptEnabled: true,
        },
      },
    },
  },

  devServer: {
    port: 9004,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
 
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].injectText = `${buildConfig}`
        return args
      })
  },

  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
};
