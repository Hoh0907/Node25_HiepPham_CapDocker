const express = require('express');
const userRo = express.Router();
const { upUsers } = require('../controller/userController');
const { verifyToken } = require('../middlewares/baseToken');

// PUT người dùng

userRo.put("/upUser/:nguoi_dung_id",verifyToken,upUsers);

module.exports = userRo;