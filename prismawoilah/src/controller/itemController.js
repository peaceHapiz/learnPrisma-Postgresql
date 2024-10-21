const prisma = require('../model/model');


const addItem = async (req, res) => {
    const { name, quantity, userId } = req.body; // Assuming userId is passed in the request
  
    try {
      const newItem = await prisma.item.create({
        data: {
          name,
          quantity,
          createdById: userId, // userId is now taken from the request body
        },
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({error :error.message});
    }
  };
  

const restockItem = async (req, res) => {
  const { id, quantity } = req.body;  
  try {
    const updatedItem = await prisma.item.update({
      where: { id },
      data: { quantity: { increment: quantity } },
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error restocking item' });
  }
};

const reduceStock = async (req, res) => {
  const { id, quantity } = req.body; 
  try {
    const updatedItem = await prisma.item.update({
      where: { id },
      data: { quantity: { decrement: quantity } },
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error reducing stock' });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
};

module.exports = { addItem, restockItem, reduceStock, getAllItems };
