// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js';

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' })); // en producción restringe el origen
app.use(express.json());

app.use('/tasks', tasksRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
