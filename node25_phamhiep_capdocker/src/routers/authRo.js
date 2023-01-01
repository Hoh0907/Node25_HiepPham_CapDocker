const express = require('express');
const authRo = express.Router();
const {signup,loign} = require('../controller/authController');
authRo.post('/zo',signup);
authRo.get('/in',loign);






module.exports = authRo