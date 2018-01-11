import Router from 'koa-router'
import UserController from './../controller/userController'

const router = new Router()

router.prefix('/user')

router
    .get('/', function (ctx, next) {
        ctx.body = 'Hello World!';
      })
    .get('/getUser', UserController.getAllUser)
    .get('/getUserById', UserController.getUserById)

export default router
