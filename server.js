// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const morgan = require('morgan');
const DOT_ENV = require('dotenv').config();

const app = express();
const router = require('./routes/app.route');
const db = require('./models');

// Define the server port to access the API
const SVR_PORT = process.env.PORT || 3000;

// Connection to the Database
const database = require('./config/db_connection');
database.authenticate()
    .then(() => console.log('DATABASE CONNNECTED....'))
    .catch(err => console.log('Error: ' + err));

db.sequelize.sync();

//Middleware configure app to use express(), bodyParser(), Cors() and Router()
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use(router);

// Starting the Server Port
app.listen(SVR_PORT, (err) => {
    // --- Error message -----
    if (err) throw err;
    // ---- Success message ---- 
    console.log('Server is listining on port: ' + SVR_PORT);
})