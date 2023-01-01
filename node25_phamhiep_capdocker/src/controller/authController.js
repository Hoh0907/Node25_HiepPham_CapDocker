const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const {sucessCode,failCode,errorCode} = require('../config/reponse');
const {parseToken} = require('../middlewares/baseToken');
const bcrypt = require('bcrypt');

const signup = async(req,res)=>{
    try{
        let {
            email,
            mat_khau,
            ho_ten,
            tuoi,
            anh_dai_dien
        } = req.body; // doox du lieu ve
        
        let mat_khau_token = bcrypt.hashSync(mat_khau,2);//max hoas
        let checkmail = await model.users.findOne({
            where: {
                email
            }
        })
        if(checkmail){
            failCode(res,{email,
                mat_khau,
                ho_ten,
                tuoi,
                anh_dai_dien},'email cuar ng` khac')
        }else{
            let data = await model.users.create({
                email,
                mat_khau:mat_khau_token,
                ho_ten,
                tuoi,
                anh_dai_dien
            })
            sucessCode(res,data,'zo ddi men')
        }
    }catch(error){
        errorCode(res,'BE sai ruif')
    }
}
const loign = async(req,res)=>{
    try{
        let {
            email,
            mat_khau
        } = req.body; // doox du lieu ve
        // let mat_khau_token = bcrypt.hashSync(mat_khau,10);//max hoas
        let checkPW = await model.users.findOne({
            where: {
                email
            }
        })
        if(checkPW){
            let checkMK = bcrypt.compareSync(mat_khau,checkPW.mat_khau);
            if(checkMK){
                sucessCode(res,parseToken(checkPW),'zo thui ')
            }else{
                failCode(res,'','sai pass ruif')
            }
        }else{
                failCode(res,'','email tachj ruif')
        }
    }catch(error){
        errorCode(res,'BE sai ruif')
    }

}
module.exports = {signup,loign}