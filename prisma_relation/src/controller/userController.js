const prisma = require('../model/model');


const createUser = async (req, res) => {
  const { username, password, email, name, address, phone } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        profile: {
          create: {
            email,
            name,
            address,
            phone,
          },
        },
      },
    });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true, post: true },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

module.exports = { createUser, getAllUsers };
