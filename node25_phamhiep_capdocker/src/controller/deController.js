const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

// Lấy thông tin ảnh và người tạo ảnh bằng id ảnh
const getInfoImgById = async (req, res) => {
    try {
        // Lấy id được nhập trên params
        let { hinh_id } = req.params
        // Tìm id hinh trong toàn bộ ảnh
        let checkImg = await model.img.findOne({
            where: {
                hinh_id
            }
        });
        if (checkImg) {
            sucessCode(res, checkImg, "Lấy dữ liệu thành công");
        } else {
            failCode(res, hinh_id, "Hình ảnh không tồn tại");
        }
    }
    catch (error) {
        errorCode(res,'BE sai ruif')
    }
};

const getCommentById = async (req, res) => {
    try {
        //Lấy id trên params
        let { hinh_id } = req.params;
        // Tìm id hinh trong toàn bộ ảnh
        let checkComment = await model.binh_luan.findOne({
            where: {
                hinh_id
            }
        });
        if (checkComment) {
            sucessCode(res, checkComment, 'Lấy dữ liệu thành công');
        }
        else {
            failCode(res, hinh_id, "Hình ảnh không tồn tại");
        };
    }
    catch (error) {
        errorCode(res,'BE sai ruif')
    }
};

const createComment = async (req, res) => {
    try {
        // lấy thông tin từ body
        let {
            nguoi_dung_id,
            hinh_id,
            ngay_binh_luan,
            noi_dung
        } = req.body;
        // Check xem người dùng hoặc là hình ảnh đã tồn tại chưa
        let checkCommentContent = await model.binh_luan.findOne({
            where: {
                nguoi_dung_id,
                hinh_id
            }
        })
        if (checkCommentContent) {
            failCode(res, { nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung }, "Người dùng đã bình luận ảnh này")
        }
        else {
            // Nếu đủ điều kiện trả về sucessCode
            let data = await model.binh_luan.create({
                nguoi_dung_id,
                hinh_id,
                ngay_binh_luan,
                noi_dung
            });
            sucessCode(res, data, "Bình luận thành công")
        }

    }
    catch (error) {
        // Nếu lỗi ở try trả về => Lỗi BackEnd
        errorCode(res, "Hình ảnh hoặc người dùng không tồn tại")
    }
}


// Lấy thông tin hình đã lưu hay chưa theo id
const getImgNotSave = async (req, res) => {
    try {
        let { hinh_id} = req.params;
        let checkIdImg = await model.luu_anh.findAll({
            where: {
                hinh_id
            }
        });
        if (checkIdImg.length != 0) {
            sucessCode(res, checkIdImg, "Lấy dữ liệu thành công");
        } else {
            failCode(res, "", "Hình ảnh này chưa được lưu")
        }
    }
    catch (error) {
        errorCode(res,'BE sai ruif')
    }
}

module.exports = {
    getInfoImgById,
    getCommentById,
    createComment,
    getImgNotSave
}