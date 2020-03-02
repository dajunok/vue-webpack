// vue.config.js
module.exports = {
  publicPath: '/vue/', // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。默认是'/',vue cli 3 打包部署到服务器上会出现net::ERR_ABORTED 404 (Not Found)问题
  productionSourceMap: false, // 是否生成调试文件.map
  filenameHashing: false // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
}
