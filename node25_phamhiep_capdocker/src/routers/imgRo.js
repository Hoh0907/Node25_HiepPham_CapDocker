const express = require('express');
const imgRo = express.Router();
const { getUser ,getImgById,getImgSaveById,deleteImg} = require('../controller/imgController');
const { verifyToken } = require('../middlewares/baseToken');

//GET thông tin người dùng
imgRo.get('/getUser/:nguoi_dung_id',verifyToken,getUser);

//GET danh sách ảnh người dùng đã tạo
imgRo.get('/getImgById/:nguoi_dung_id',verifyToken,getImgById);

//GET danh sách ảnh đã lưu theo người dùng
imgRo.get('/getSaveImgById/:nguoi_dung_id',verifyToken,getImgSaveById);

//DELETE ảnh đã tạo theo id ảnh
imgRo.delete('/deleteImgById/:hinh_id',verifyToken,deleteImg);

module.exports = imgRo;
