import { Sequelize } from 'sequelize';

const config = {
  host: process.env.POSTGRES_HOST ?? 'localhost',
  dialect: 'postgres',
  logging: false,
  port: process.env.POSTGRES_PORT ?? 5432
};

const sequelize = new Sequelize(process.env.POSTGRES_DB ?? 'userdb','mads','', config)

try{
  await sequelize.authenticate();
  console.log("Connected to db");
} catch (error)
{
  console.log("not connected to db", error);
}

export default sequelize;