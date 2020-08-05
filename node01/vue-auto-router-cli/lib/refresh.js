const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () => {
    // 获取页面列表
    const list =
        fs.readdirSync('./hello/src/views')
            .filter(v => v !== 'Home.vue')
            .map(v => ({
                name: v.replace('.vue', '').toLowerCase(),
                file: v
            }))
    compile({
        list
    }, './hello/src/router.js', './hello/template/router.js.hbs')

    // 生成菜单
    compile({
        list
    }, './hello/src/App.vue', './hello/template/App.vue.hbs')



    /**
     * 
     * @param {*} meta 数据定义
     * @param {*} filePath 目标文件
     * @param {*} templatePath 模板文件
     */
    function compile(meta, filePath, templatePath) {
        if (fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString()
            const reslut = handlebars.compile(content)(meta)
            fs.writeFileSync(filePath, reslut)
        }
        console.log(chalk.red(`🚀${filePath} 创建成功`))
    }


}