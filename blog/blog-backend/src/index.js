const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    next();
});

app.use((ctx, next) => {
    console.log(ctx.url);
    console.log(2);
    next();
});

app.use(ctx => {
    ctx.body = 'hello world';
});

// 포트 4000번으로 오픈 
app.listen(4000, () => {
    console.log('Listening to port 4000');
});