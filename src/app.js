import Koa from 'koa'
import bodyParser from 'koa-bodyParser'
import user from './router/index'
import responseFormatter from './middleware/responseFormatter'

const app = new Koa()

app.use(bodyParser())

app.use(responseFormatter)

app.use(user.routes()).use(user.allowedMethods())

export default app
