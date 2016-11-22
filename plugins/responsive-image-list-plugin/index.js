var fs = require('fs');

var options = {}

function ResponsiveImageListPlugin(imageDir, outputComponent) {
  options = {
    imageDir: imageDir,
    outputComponent: outputComponent
  }
}

ResponsiveImageListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    var listFileLines = ['export default [']
    var widths = ['2048', '1920', '1600', '1440', '1366', '1280', '1024', '960', '667', '640', '568', '320']
    var sizes = widths.map(width => `sizes[]=${width}w`).join(',')
    fs.readdir(options.imageDir, function(err, items) {
      items.forEach(function(item) {
        var imagePath = `.${options.imageDir}/${item}`
        listFileLines.push(`\trequire('responsive?${sizes}!${imagePath}'),`)
      })
      listFileLines.push(']')
      var listFileContent = listFileLines.join('\n')
      fs.readFile(options.outputComponent, (err, data) => {
        if (data == listFileContent) {
          // No changes, return without doing anything to avoid an infinite loop
          return
        }
        fs.writeFile(options.outputComponent, listFileContent)
      })
    })
  })
}

module.exports = ResponsiveImageListPlugin
