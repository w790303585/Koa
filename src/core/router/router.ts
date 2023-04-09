export * from '../../modules';

import Koa from 'koa';
import Router from 'koa-router';
import { controllers } from '../decorators/decorator';
/**
 * 初始化路由
 */
export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>, router: Router<any, {}>) => {
    controllers.forEach((item) => {
        const prefix = item.constructor.prefix;
        let url = item.url;
        if (prefix) url = `/${prefix}/${url}`;
        console.log('registe api: ', item.method, url);
        router[item.method](url, ...item.middleware, item.handler);
    });
    app.use(router.routes()).use(router.allowedMethods()) // 路由装箱
}