# 步骤

1. 创建基本客户端页面，配置 webpack

2. 启动基本服务端服务，将打包好的静态页面链接到服务端的 body 上，并在 3000 端口监听

3. 使用 renderToString 将组件页面渲染好，将渲染好的页面放入 body 中，实现初步 SSR

4. 前端路由 react-router 与后端路由 koa-router 切换，服务端前端路由使用 staticRouter 包裹，客户端使用 browserRouter

5. 获取后台返回数据，一般客户端使用 axios 发请求获取。SSR 模式下，服务端请求接口获取数据，将数据同步到 HTML 中。

6. 数据同步使用 redux

7. 识别 class 中的 static 包 @babel/plugin-proposal-class-properties
