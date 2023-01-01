const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const {sucessCode,failCode,errorCode} = require('../config/reponse');
const uploadImg = async (req, res) => {
    const fs = require('fs');

    if (req.file.size >= 4000000000000000) {
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        res.send("chỉ được phép upload 4Mb");
        return;
    }
    console.log(req.file.mimetype)
    if (req.file.mimetype != "image/jpeg" && req.file.mimetype != "image/jpg") {
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        res.send("sai định dạng");
    }

    fs.readFile(process.cwd() + "/public/img/" + req.file.filename, (err, data) => {
        // `"data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}"`;

        let dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
        // lưu database
        //xử lý xóa file
        setTimeout(() => {
            fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);

        }, 20);
        res.send(dataBase);
    })
}
module.exports = {uploadImg}