import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Import necessário para __dirname
import config from './config/env.js';
import connectDB from './config/db.js';
import messageRoutes from './routes/messageRoute.js';

// Configuração do __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // Para parsear JSON
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


// Roteamento de criação de mensagens
app.use('/api/messages', messageRoutes);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public', '404.html'));
});


// Inicia servidor
app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  await connectDB(); 
  console.log(`Conectando ao MongoDB: ${config.MONGO_URI}`);
});