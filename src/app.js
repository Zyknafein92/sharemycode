/**         Variables            **/
const axios = require('axios');
const database = require('./database/database');
const express = require('express');
const app = express();
const userRoutes = require('./controller/userController');
// const dotenv = require('dotenv');


/**     Config      **/
// dotenv.config();
app.use(express.json());


/**    Middlewares    **/
app.use('/user', userRoutes);


module.exports = app;
