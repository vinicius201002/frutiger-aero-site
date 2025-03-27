import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
    trim: true,
    maxlength: [50, 'Nome não pode exceder 50 caracteres']
  },
  message: {
    type: String,
    required: [true, 'A mensagem é obrigatória'],
    maxlength: [500, 'Mensagem muito longa']
  },
  ip: String,                           // Para analytics futuro
  userAgent: String,                    // Dados do cliente
  createdAt: { type: Date, default: Date.now }  // Timestamp automático
});

// Index para buscas rápidas
MessageSchema.index({ name: 1, createdAt: -1 });

export default mongoose.model('Message', MessageSchema);