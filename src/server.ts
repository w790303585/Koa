import Koa from 'koa';
import initRouter from './core/router/router'
import Router from 'koa-router';
const app = new Koa();
const router = new Router();

initRouter(app, router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
