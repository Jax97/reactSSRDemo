import Koa from 'koa';
import serve from 'koa-static';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Router from '@koa/router';
import { matchRoutes } from 'react-router-config';
import routes from '../shared/Routes';
import { Provider } from 'react-redux';
import { createServerStore } from '../shared/store/index';

const app = new Koa();
const router = new Router();

app.use(serve('./public'));

router.get(['/', '/about'], async (ctx) => {
  console.log('about进来了');
  const matchedRoutes = matchRoutes(routes, ctx.req.url);
  const store = createServerStore();
  let promises = [];
  matchedRoutes.forEach((val) => {
    if (val.route.loadData) {
      promises.push(val.route.loadData(store));
    }
  });
  await Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    ctx.body = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>react同构22</title>
      </head>
      <body>
          <div id="root">${content}</div>
          <script >
            window.BACKEND_DATA  = ${JSON.stringify(store.getState())};
          </script>
          <script src="/bundle.js"></script>
      </body>
      </html>`;
  });
});

router.get('/getData', (ctx) => {
  ctx.body = {
    code: 0,
    msg: '操作成功',
    data: '后端返回的数据',
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log('http://localhost:3001');
});