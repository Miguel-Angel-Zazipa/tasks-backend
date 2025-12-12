// server.js
import express from 'express';
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js';

dotenv.config();

const app = express();

// ====== CORS FIX DEFINITIVO ======
const allowedOrigins = [
  'http://localhost:3000',
  'https://tasks-frontend-iota-seven.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

// =================================

app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

// Render usa process.env.PORT automáticamente
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
