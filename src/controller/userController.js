import mongoose from 'mongoose'
import { User } from './../model'

class UserController {
    static async getAllUser(ctx) {
        const res = await User.find({})

        ctx.body = res
    }

    static async getUserById(ctx) {
        // post body传参方式
        // const id = ctx.request.body.id
        // const res = await User.findById(id)

        // get 获取url问号后的参数，例：XXXX?id=123  通过ctx.request.query(或者ctx.query)得到{id: '123'}
        const id = ctx.query.id
        const res = await User.findById(id)
        ctx.body = res
    }
}

export default UserController
// 上面不用static 则：export default new UserController()
// 需实例化一个实例然后export
// 问题来了，再react中可以直接export default XXX，这里有什么梗？？？？
