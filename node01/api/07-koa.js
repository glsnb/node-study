const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    ctx.body = {
        name: 'tom',
        age: '20'
    }
    next()
})

app.listen(3000)