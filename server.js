//bring in dependancies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//npm run server to start server

//initialize express
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//bring mongoDB into this file
const db = require('./config/keys').monogURI;

//connect to mongoDB --promise based
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//set the port number
const port = process.env.PORT || 5000;

//tell the app to listen on that port
app.listen(port, () => console.log(`Server started on port ${port}`));