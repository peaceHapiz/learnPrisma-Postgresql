require('dotenv').config();
const express = require('express');
const itemRoutes = require('./routes/itemRoute');
const authRoutes = require('./routes/userRoute');

const app = express();
app.use(express.json());

app.use('/stock', itemRoutes);
app.use('/login', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http:/localhost:${PORT}`);
});
