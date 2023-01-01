const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const {sucessCode,failCode,errorCode} = require('../config/reponse');
const bcrypt = require('bcrypt');

const upUsers = async(req,res) => {
    try {
        let { nguoi_dung_id } = req.params;
        let {
            email,
            mat_khau,
            ho_ten,
            tuoi,
            anh_dai_dien
        } = req.body;
        // Mã hóa mat_khau
        let mat_khau_hash = bcrypt.hashSync(mat_khau, 10)
        let checkUser = await model.users.findOne({
            where: {
                nguoi_dung_id
            }
        });
        if (checkUser) {
            let result = await model.users.update({
                email,
                mat_khau: mat_khau_hash,
                ho_ten,
                tuoi,
                anh_dai_dien
            }, { where: { nguoi_dung_id } });
            sucessCode(res, result, "Cập nhật người dùng thành công");
        } else {
            failCode(res, nguoi_dung_id, "Người dùng không tồn tại");
        }
    }
    catch (error) {
        errorCode(res,'BE sai ruif')
    }try {
        let { nguoi_dung_id } = req.params;
        let {
            email,
            mat_khau,
            ho_ten,
            tuoi,
            anh_dai_dien
        } = req.body;
        // Mã hóa mat_khau
        let mat_khau_hash = bcrypt.hashSync(mat_khau, 10)
        let checkUser = await model.users.findOne({
            where: {
                nguoi_dung_id
            }
        });
        if (checkUser) {
            let result = await model.users.update({
                email,
                mat_khau: mat_khau_hash,
                ho_ten,
                tuoi,
                anh_dai_dien
            }, { where: { nguoi_dung_id } });
            sucessCode(res, result, "Cập nhật người dùng thành công");
        } else {
            failCode(res, nguoi_dung_id, "Người dùng không tồn tại");
        }
    }
    catch (error) {
        errorCode(res,'BE sai ruif')
    }
}

module.exports = { upUsers }