/*
|--------------------------------------------------------------------------
|
| 此脚本在流水线上会被触发，用于校验组名是否和应用里的组名保持一致
|
|--------------------------------------------------------------------------
*/
import process from 'process'
import path from 'path'
import helDevUtils from 'hel-dev-utils'
import pkg from '../package.json' assert { type: 'json' }

const fileFullPath = path.join(process.cwd(), './src/configs/subApp')
helDevUtils.check(pkg, { fileFullPath, checkEnv: false })
