const express = require('express');
const path = require('path');
const app = express();
const router = require('./Router/routes.js');
const {connectDB} = require('./Handlers/dbhandler.js');

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log('Server arghing on https://localhost:' + PORT);
    connectDB('mongodb://10.12.1.66','local')
});