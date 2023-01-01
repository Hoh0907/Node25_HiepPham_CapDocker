const express = require('express');
const rootRouter = express.Router();

const authro = require('./authRo');
rootRouter.use('/zo',authro)

const homeRo = require('./homeRo');
rootRouter.use('/home',homeRo);

// const listRo = require('./listRo');
// rootRouter.use('/list',listRo);

const userRo = require('./userRo');
rootRouter.use('/user',userRo);

const imgRo = require('./imgRo');
rootRouter.use('/img',imgRo);

const detailRo = require('./detailRo');
rootRouter.use('/detail',detailRo);

const addRo = require('./addRo');
rootRouter.use('/add',addRo);



module.exports = rootRouter;