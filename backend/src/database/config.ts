import dotenv from 'dotenv';

dotenv.config();

export default {
  user: process.env.USER_NAME,
  pass: process.env.PASSWORD,
  autoIndex: false,
  dbName: process.env.DB_NAME,
};