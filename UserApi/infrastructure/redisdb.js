import { createClient } from 'redis';

const redisDb = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export default redisDb;