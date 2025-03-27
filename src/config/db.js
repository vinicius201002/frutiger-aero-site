import mongoose from 'mongoose';
import config from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Erro no MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;