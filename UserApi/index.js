import express from 'express';
import bodyParser from 'body-parser';
import router from './infrastructure/router.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //maxAge: 86400,
  credentials: true,
}));
// app.use(async (req,res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');

//   await next();
// });
app.use(bodyParser.json());
app.use(router);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port,()=> console.log(`listening on http://${hostname}:${port}`));
