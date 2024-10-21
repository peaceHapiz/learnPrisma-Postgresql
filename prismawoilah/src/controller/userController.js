const jwt = require('jsonwebtoken');
const prisma = require('../model/model');

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await prisma.user.findUnique({ where: { email } });


    if (user && user.password === password) {

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
};

module.exports = { login };
