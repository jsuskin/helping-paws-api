const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const authRoute = require('./routes/auth');
const animalsRoute = require('./routes/animals');

app.use('/user', authRoute)
app.use('/animals', animalsRoute);

app.get('/', (req, res) => {
  res.send('home route');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'));

app.listen(PORT)