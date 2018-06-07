/**
 * 响应结果格式化
 * 在app.use(router)之前调用
 */

const responseFormatter = async (ctx, next) => {
    // 先去执行路由
    await next()
    console.log('ctx = ', ctx.body);

    ctx.body = {
        code: 0,
        msg: 'success',
        data: ctx.body
    }

    // if (ctx.body) {
    //     ctx.body = {
    //         code: 0,
    //         message: 'success',
    //         data: ctx.body
    //     }
    // } else {
    //     ctx.body = {
    //         code: 0,
    //         message: 'success'
    //     }
    // }
}

export default responseFormatter
