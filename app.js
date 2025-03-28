const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const authRoutes = require('./Routes/authRoutes.js');
const {connectDB} = require('./Handlers/dbhandler.js');


app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log('Server arghing on ' + PORT);
    connectDB('mongodb://localhost:27017/ReinsdyrDatabase');
});