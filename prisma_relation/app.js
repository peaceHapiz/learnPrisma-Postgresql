const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const userRoutes = require('./src/routes/userRoute');
const postRoutes = require('./src/routes/postController');
const categoryRoutes = require('./src/routes/categoryController');

const app = express();
app.use(bodyParser.json());


app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
