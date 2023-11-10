import Koa from 'koa';
const app = new Koa();
import { bodyParser } from "@koa/bodyparser";
import router from './router.js';
import cors from 'koa2-cors'
const port = 3001;

const options = {
  //origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // maxAge: 86400,
  credentials: true,
};
app.use(cors(options))
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.req.headers.origin);
  // ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // ctx.set('Access-Control-Allow-Credentials', 'true');
  await next();
});
app.use(bodyParser())
app.use(router.routes());

app.listen(port, ()=> console.log('listening on port http://127.0.0.1:'+port));
