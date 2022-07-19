const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const db = process.env.MONGO_URI;

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('mongo connected'))
.catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use('/submit', require('./api/submit'));

app.use('/fetch/gossip', require('./api/fetchGossip'));

app.use(express.static(path.join(__dirname, 'static')));

app.listen(process.env.PORT || 5000);

