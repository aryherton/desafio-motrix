import { connect } from 'mongoose';
import dotenv from 'dotenv';

import options from '../config';

dotenv.config();

const user = process.env.USER_NAME;
const pswd = process.env.PASSWORD;

export default (url: string = `mongodb+srv://${user}:${pswd}@motrix.ortsqdj.mongodb.net/?retryWrites=true&w=majority`) => connect(url, options);
