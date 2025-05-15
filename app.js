const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./src/routes/product.routes.js');
const categoryRoutes = require('./src/routes/category.routes.js');
const dbconnect=require('./src/config/db.js');
dbconnect(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));