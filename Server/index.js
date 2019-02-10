const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose.connect(config.DB_URI);


const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json())
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
        console.log('I am running');
})