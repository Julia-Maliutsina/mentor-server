import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();

const app = express();
const port = process.env.PORT || 8880;
const localhost = process.env.LOCAL_HOST || 'http://localhost:3000';
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'railway',
  password: '1sm1RuPDb4af2eOcFK8B',
  port: 5000,
});

app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [localhost],
  }),
);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to DB');
    app.listen(port, () => {
      console.log(`Server started on : ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

connectToDatabase();
