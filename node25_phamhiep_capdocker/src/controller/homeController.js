const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const { Sequelize } = require('sequelize');
const model = init_models(sequelize);
const {sucessCode,failCode,errorCode} = require('../config/reponse');
// const img = require('../models/img');
const Op = Sequelize.Op;

const img_get = async(req,res)=>{
    try{
        let img_1 = await model.img.findAll();
        sucessCode(res,img_1,"hinhf dos xem ddi");
    }catch(errors){
        errorCode(res,'luiiiiiiiiiiiiiiiiiiiiii');
    }
} 

const search_img =async(req,res)=>{
    try{
        let { ten_hinh } = req.params
        let checkimg = await model.img.findAll({
            where: {
                ten_hinh:{
                    [
                        Op.like
                    ]
                    : `${ten_hinh}%`
                }
            }
        });
        if(checkimg){
            sucessCode(res,checkimg,'dc ruif')
        }else{
            failCode(res,ten_hinh,'ai do')
        }
    }catch(errors){
        errorCode(res,'BE sai')
    }


}


module.exports = {img_get,search_img}
