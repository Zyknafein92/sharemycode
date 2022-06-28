/**         Config            **/
const axios = require('axios');
const database = require('./database/database')
const express = require('express');
const app = express();
app.use(express.json());


/**    Middlewares    **/


module.exports = app;
