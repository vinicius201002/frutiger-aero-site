import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configura caminhos absolutos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detecta ambiente automagicamente
const env = process.env.NODE_ENV || 'development';

// Carrega o arquivo .env correto
dotenv.config({
  path: path.resolve(__dirname, `../.env.${env}`)
});

// Configurações padrão (fallback)
const defaultConfig = {
  PORT: 3000,
  NODE_ENV: env,
  MONGO_URI: 'mongodb://localhost:27017/messages_db',
  DEBUG: false
};

// Combina .env com defaults
const config = {
  ...defaultConfig,
  ...process.env, // Sobrescreve com variáveis de ambiente
  // Conversões de tipo
  PORT: parseInt(process.env.PORT, 10) || defaultConfig.PORT,
  DEBUG: process.env.DEBUG === 'true'
};

// Validações
if (!config.MONGO_URI) {
  throw new Error('❌ MONGO_URI não definida no .env');
}

export default config;