import user from './user.js'
import sequelize from '../infrastructure/db.js';

try{
  (async()=>await sequelize.sync({force:false}))();
} catch (error)
{
  console.log("could not sync: "+error);
}