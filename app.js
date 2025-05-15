const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const connectDB = require('./config/db'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/cosmetics', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));