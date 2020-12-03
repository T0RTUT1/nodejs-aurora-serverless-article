import 'dotenv/config';
import Sequelize from 'sequelize';
import mysql2 from 'mysql2';

export const example = () => {
  return "hi";
};

export const connectToDatabase = async () => {
  const sequelize = new Sequelize.Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: 'mysql',
      dialectModule: mysql2,
      dialectOptions: {
        connectTimeout: 25000,
      },
      host: process.env.DB_HOST,
      logging: console.log,
      port: Number.parseInt(process.env.DB_PORT),
    }
  );
  const [results, metadata] = await sequelize.query("select 1", { raw: true });
  return results;
};