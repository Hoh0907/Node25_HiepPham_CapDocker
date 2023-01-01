const express = require('express');
const addRo = express.Router();
const { postImgByUser } = require('../controller/addImgController');
const { verifyToken } = require('../middlewares/baseToken');


// POST ảnh của một user
addRo.post('/postImg', verifyToken, postImgByUser);

module.exports = addRo;