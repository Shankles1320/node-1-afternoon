const express = require('express');
const app = express();
// const getProducts = require("./getProducts");
const getProduct = require('./getProduct')


const port = 3001;

app.get('/api/products', getProduct.getProducts);
app.get('/api/products/:id', getProduct.getProduct )

app.listen(port, () => console.log(`server connected bro ${port}`))