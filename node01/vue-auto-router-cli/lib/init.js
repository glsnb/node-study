const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('./download')
const spawn = async (...args) => {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout) // 正常流
        proc.stderr.pipe(process.stderr) // 错误流
        proc.on('close', () => {
            resolve()
        })
    })
}
const log = content => console.log(chalk.green(content))
module.exports = async name => {
    // 打印欢迎画面
    clear() // 清屏
    const data = await figlet('KKB Welcome')
    log(data)
    // 创建项目
    log(`🚀创建项目:` + name)
    // 克隆代码
    await clone('github:su37josephxia/vue-template', name)
    log('安装依赖')
    await spawn('yarn', ['install'], { cwd: `./${name}` })
    log(`
👌安装完成：
To get Start:
===========================
    cd ${name}
    npm run serve
===========================
            `)

    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })

}