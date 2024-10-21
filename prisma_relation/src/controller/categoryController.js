const prisma = require('../model/model');


const createCategory = async (req, res) => {
  const { name, postId, assignedBy } = req.body;

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        posts: {
          create: {
            post: { connect: { id: postId } },
            assignedBy,
          },
        },
      },
    });
    res.json(newCategory);
  } catch (error) {
    res.status(400).json({ error: 'Error creating category or assigning to post' });
  }
};


const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { posts: { include: { post: true } } },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

module.exports = { createCategory, getAllCategories };
