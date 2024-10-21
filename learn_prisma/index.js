const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

//get all siswa
app.get('/siswa', async (req, res) => {
  const siswa = await prisma.student.findMany();
  res.json(siswa);
});

//post siswa
app.post('/siswa', async (req, res) => {
  const { name, email } = req.body;
  const siswa = await prisma.student.create({
    data: { name, email },
  });
  res.json(siswa);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
