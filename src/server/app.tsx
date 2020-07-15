import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';

const app = new Koa();

app.use(serve(path.join('./public')));
app.use((ctx) => {
  const content = renderToString(<App></App>);

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react同构22</title>
</head>
<body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
</body>
</html>`;
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
