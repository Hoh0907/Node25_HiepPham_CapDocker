const express = require('express');
const detailRo = express.Router();
const { getInfoImgById, getCommentById, createComment, getImgNotSave } = require('../controller/deController');
const { verifyToken } = require('../middlewares/baseToken');
// GET ảnh theo id ảnh và người dùng
detailRo.get('/getInfoImgById/:hinh_id', verifyToken, getInfoImgById);

//GET bình luận theo id ảnh
detailRo.get('/getCommentById/:hinh_id', verifyToken, getCommentById);

//POST bình luận
detailRo.post('/createComment', verifyToken, createComment);

//GET hình ảnh đã lưu hay chưa theo id
detailRo.get("/getImgNotSave/:hinh_id", verifyToken, getImgNotSave);

module.exports = detailRo;