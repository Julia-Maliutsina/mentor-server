import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import pkg from 'pg';

import syncAssociations from './db/models/associations.js';
import { logInRouter, signUpRouter, mentorsRouter } from './routes/index.js';

const { Client } = pkg;

dotenv.config();

const app = express();
const port = process.env.PORT || 8880;
const localhost = process.env.LOCAL_HOST || 'http://localhost:3000';
const db_name = process.env.DB_TEST;
const db_port = process.env.DB_PORT;
const pg_pass = process.env.PG_PASS;
const pg_user = process.env.PG_USER;

const client = new Client({
  user: pg_user,
  host: 'containers-us-west-49.railway.app',
  database: db_name,
  password: pg_pass,
  port: +db_port,
});

app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [localhost],
  }),
);
app.use(cookieParser());
app.use(logInRouter);
app.use(signUpRouter);
app.use(mentorsRouter);

async function connectToDatabase() {
  try {
    await client.connect();
    syncAssociations();
    console.log('Connected to DB');
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

connectToDatabase();
