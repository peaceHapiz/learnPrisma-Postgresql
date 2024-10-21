const prisma = require('../model/model');


const createPost = async (req, res) => {
  const { title, content, published, authorId } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published,
        author: { connect: { id: authorId } },
      },
    });
    res.json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Error creating post' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

module.exports = { createPost, getAllPosts };
