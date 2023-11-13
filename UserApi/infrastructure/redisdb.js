import { createClient } from 'redis';

const options = {
  url: `redis://${process.env.REDIS_DB}:6379`
};

if(!process.env.REDIS_DB)
  options = {}

const redisDb = await createClient(options)
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export default redisDb;