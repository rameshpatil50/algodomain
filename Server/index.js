const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const rest_port = 5000;

const seller = require('./seller'); // seller.js
const product = require('./product'); // product.js


app.use('/seller', seller);
app.use('/product', product);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(rest_port, () => {
    console.log("Server is running on port: " + rest_port);
}); 