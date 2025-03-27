import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/env.js';
import connectDB from './config/db.js';
import messageRoutes from './routes/messageRoute.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', true);
const port = 3000;

// Configuração CORRETA do CORS (deve vir antes das rotas)
app.use(cors({
  origin: 'https://frutigeraero.duckdns.org', // Permite apenas este domínio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Se estiver usando cookies/sessão
}));

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use('/api/messages', messageRoutes);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public', '404.html'));
});

// Inicia servidor
app.listen(port, '0.0.0.0', async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  await connectDB(); 
  console.log(`Conectando ao MongoDB: ${config.MONGO_URI}`);
});