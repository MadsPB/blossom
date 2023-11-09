import { Sequelize } from 'sequelize';

const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
};


const sequelize = new Sequelize('projectdb', 'mads', '',config);


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;

