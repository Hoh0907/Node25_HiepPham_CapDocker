const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

// Thêm một ảnh của user
const postImgByUser = async (req, res) => {
    try {
        let {
            ten_hinh,
            duong_dan,
            mo_ta,
            tuoi,
            nguoi_dung_id,
            ngay_luu
        } = req.body
        let data = await model.img.create({
            ten_hinh,
            duong_dan,
            mo_ta,
            tuoi,
            nguoi_dung_id,
            ngay_luu
        });
        sucessCode(res, data, "Thêm ảnh thành công");
    }
    catch (error) {
        errorCode(res, "Lỗi BackEnd")
    }
}

module.exports = { postImgByUser }