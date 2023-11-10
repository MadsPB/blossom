import express from 'express';
import bodyParser from 'body-parser';
import router from './infrastructure/router.js';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(router);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port,()=> console.log(`listening on http://${hostname}:${port}`));
