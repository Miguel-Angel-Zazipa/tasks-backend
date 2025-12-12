// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://tasks-frontend-iota-seven.vercel.app/', // cámbialo por tu URL real en Vercel
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // permitir Postman / curl
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS: ' + origin));
    }
  }
}));

app.use(express.json());

app.use('/tasks', tasksRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
