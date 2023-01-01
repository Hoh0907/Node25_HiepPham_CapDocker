const express = require('express');
const listRo = express.Router();
const {uploadImg} = require('../controller/listController');
const {verifyToken} = require('../middlewares/baseToken');
const {upload} = require('../middlewares/upload');
listRo.post('/upimg',verifyToken,upload.single('up'),uploadImg);

module.exports = listRo