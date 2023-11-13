import { createClient } from 'redis';

const options = {
  url: `redis://${process.env.REDIS_DB??'localhost'}:6379`
};

const redisDb = await createClient(options)
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export default redisDb;