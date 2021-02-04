const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product.route'); 

const port = process.env.PORT || 8080;
const app = express();

// Set up mongoose connection
// const mongoDB = process.env.MONGODB_URI || 'mongodb://root:products@localhost:27017/products'; for prod
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/products';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/items', productRoutes);

// for prod
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});