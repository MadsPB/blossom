import Koa from 'koa';
const app = new Koa();
import { bodyParser } from "@koa/bodyparser";
import router from './router.js';
const port = 3001;

app.use(bodyParser())
app.use(router.routes());

app.listen(port, ()=> console.log('listening on port http://127.0.0.1:'+port));
