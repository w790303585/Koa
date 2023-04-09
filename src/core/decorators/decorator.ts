/**
 * 请求方法
 */
enum RequestMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
    OPTION = "option",
    PATCH = "patch"
}

function RequestMapping({ url = "", method = "", middleware = [] }): MethodDecorator {
    return function (target, name, descriptor) {
        // 创建router需要的数据 url，method，middleware（可以没有）,最终执行的方法，装饰器队对象的构造函数
        const item = {
            url: url.replace(/^\/+|\/+$/g, ''),
            method: method,
            middleware: middleware,
            handler: target[name],
            constructor: target.constructor,
        };
        controllers.push(item);
    }
}

/**
 * 定义注册的路由数组
 */
export const controllers: {
    url: string;
    method: string;
    middleware: any[];
    handler: string;
    constructor: any;
}[] = [];

/**
 * 给controller添加装饰
 */
export function Controller(path: string = ''): ClassDecorator {
    return (target) => {
        // 给controller类添加路由前缀
        (target as any).prefix = path.replace(/^\/+|\/+$/g, '');
    }
}

/**
 * 给controller类的方法添加装饰
 * url 可选
 * method 请求方法
 * middleware 中间件
 */
export function Get(url = "", middleware = []): MethodDecorator {
    return RequestMapping({ url, method: RequestMethod.GET, middleware })
}

export function Post(url = "", middleware = []): MethodDecorator {
    return RequestMapping({ url, method: RequestMethod.POST, middleware })
}

export function Put(url = "", middleware = []): MethodDecorator {
    return RequestMapping({ url, method: RequestMethod.PUT, middleware })
}

export function Delete(url = "", middleware = []): MethodDecorator {
    return RequestMapping({ url, method: RequestMethod.DELETE, middleware })
}

export function Patch(url = "", middleware = []): MethodDecorator {
    return RequestMapping({ url, method: RequestMethod.PATCH, middleware })
}
