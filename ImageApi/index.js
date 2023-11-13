import Koa from 'koa';
const app = new Koa();
import { bodyParser } from "@koa/bodyparser";
import Router from '@koa/router'
import auth from './middleware/auth.js'
import multer from 'koa-multer'
import {promises as fs} from 'fs'

const router = new Router();
// import router from './router.js';
import cors from 'koa2-cors'
const port = 3002;

const options = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // maxAge: 86400,
  credentials: true,
};
app.use(cors(options))
// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', ctx.req.headers.origin);
//   await next();
// });

const upload = multer({ dest: './files/' });
router.post('/image', upload.single('image'), async (ctx)=>
{
  try {
    const file = ctx.req.file;
    const fileNameArray = file.originalname.split('.');
  
    //Todo: validation
    const ending = fileNameArray[fileNameArray.length-1];
    const oldFileDest = './files/'+file.filename;
    const newFileDest = './files/'+file.filename+'.'+ending;
    console.log(newFileDest)
    await fs.rename(oldFileDest,newFileDest);
    ctx.body = {url: file.filename+'.'+ending}


  } catch (e) {
    ctx.body = 'wah waaah'
  }

})

// app.use(bodyParser({
//   formidable:{uploadDir: './files'},
//    multipart: true,
//    urlencoded: true
// }))
app.use(router.routes());

app.listen(port, ()=> console.log('listening on port http://127.0.0.1:'+port));