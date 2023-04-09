import { Controller, Get } from "../../../core/decorators";
import demoService from "../services/demo.service";
import { Context } from 'koa';

@Controller('/api/v1')
export class DemoController {
    constructor() { }

    @Get('/hello')
    public async helloWorld(ctx: Context) {
        const result = demoService.hello();
        ctx.body = result;
    }

    @Get('/test')
    public async test(ctx: Context) {
        const result = 'test';
        ctx.body = result;
    }
}