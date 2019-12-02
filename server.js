const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
    .connect(db)
    .then( () => console.log('MongoDB Connected . . . '))
    .catch(err => console.log(err));

// app.use(routes);
app.use('/api', users);


const port = process.env.NODE_ENV || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));