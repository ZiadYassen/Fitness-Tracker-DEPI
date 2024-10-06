const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const dbConnection = require('./config/database');
const app = express();

// database connection
dbConnection();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.Port || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})