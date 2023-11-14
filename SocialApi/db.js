import mongoose from 'mongoose';

const target = process.env.MONGO_HOST ??  "127.0.0.1";
mongoose.connect(`mongodb://${target}:27017/socialdb${process.env.MONGO_HOST ? '?authSource=admin' : ''}`)
  .then(() => console.log('Connected!'));

export default mongoose;