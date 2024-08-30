/*
|--------------------------------------------------------------------------
| npm publish 前检查根目录下 package.json 的版本号是否和 hel_dist/hel-meta.json 一致
|--------------------------------------------------------------------------
*/

const chalk = require('chalk')
const pkg = require('../package.json')
const fs = require('fs')
const path = require('path')
const helDistPath = path.resolve(__dirname, '../hel_dist/hel-meta.json')
const existHelMeta = fs.existsSync(helDistPath)

// 检查是否执行npm run build 打包命令
if (!existHelMeta) {
  console.log(chalk.red("Run the 'npm run build' command first.\n"))
  process.exit(1)
}
const { app } = JSON.parse(fs.readFileSync(helDistPath, 'utf-8'))
// 检查根目录下 package.json 的版本号是否和 hel_dist/hel-meta.json 一致
if (app?.build_version !== pkg.version) {
  console.log(
    chalk.red(
      'package.json 和 hel_dist/hel-meta.json 两个文件的版本号 (version字段) 必现保持一致\n'
    )
  )
  process.exit(1)
}
