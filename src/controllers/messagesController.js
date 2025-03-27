import Message from '../models/Message.js';

// POST /messages
export const createMessage = async (req, res) => {
  try {
    const { name, message } = req.body;
    
    const newMessage = await Message.create({
      name,
      message,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ 
      error: error.message,
      details: error.errors 
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(50); 

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};