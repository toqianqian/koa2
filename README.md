### 笔记

1.nodemon可以自动从新编译，不用重启

2.babel-register需要再入口文件（这里为根目录下的index.js）引入，
配合babel-plugin-add-module-exports（在.babelrc中配置）
可以支持import/export等es6方式（ps：入口文件中不能使用import/export，这里是index.js）

3.babel-polyfill

4.Schema定义表时要指定mongoDB中对应的collection名称（参考model/user）

5.koa-bodyparser  post 此控件支持Josn,form,text类型
```
post:
1:get 获取url问号后的参数，例：XXXX?id=123  
通过ctx.request.query(或者ctx.query)得到{id: '123'}
2:body (koa-bodyParser支持body传参，通过ctx.request.body获取参数)
post body传参方式
const id = ctx.request.body.id
const res = await User.findById(id)

ps: mac上可以用Paw模拟请求
```

6.如果想要解析multipart/form-data类型,可以用koa-multer
