/*
|--------------------------------------------------------------------------
|
| 生成meta
|
|--------------------------------------------------------------------------
*/
import process from 'process'
import path from 'path'
import helDevUtils from 'hel-dev-utils'
import packageJson from '../package.json' assert { type: 'json' }
import appInfo from '../appInfo.mjs'

helDevUtils
  .extractHelMetaJson({
    subApp: appInfo,
    buildDirFullPath: path.join(process.cwd(), './hel_dist'),
    packageJson
  })
  .catch((err) => {
    console.error(err)
    process.exit(-1)
  })
