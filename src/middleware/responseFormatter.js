/**
 * 响应结果格式化
 * 在app.use(router)之前调用
 */

const responseFormatter = async (ctx, next) => {
    /**
     * 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。
     * 当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
     */
    await next()
    
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
