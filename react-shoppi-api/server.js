const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
module.exports.bcrypt = bcrypt;

const PORT = process.env.PORT || 3300;

// for use remote server
require('dotenv').config({ path: __dirname + '.env' });
// for use localhost
// require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const products = require('./routes/productRout');
const users = require('./routes/userRoutes');
const carts = require('./routes/cartRoutes');
const order = require('./routes/orderRoutes');

app.use('/products', products);
app.use('/users', users);
app.use('/carts', carts);
app.use('/order', order);


app.listen(process.env.PORT || 3300, () => console.log(PORT));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongoose connected'))
.catch(error => console.error(error));

//old node ver 16.16.0