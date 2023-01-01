const express = require('express');
const homeRo = express.Router();
const {img_get,search_img} = require('../controller/homeController');
const {verifyToken} = require('../middlewares/baseToken');
homeRo.get('/getimg',verifyToken,img_get);
homeRo.get('/search/:ten_hinh',verifyToken,search_img);
module.exports = homeRo;