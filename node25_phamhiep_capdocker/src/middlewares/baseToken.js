const jwt = require('jsonwebtoken');

// let token = jwt.sign({data:"hi"},"9995",{algorithm:"HS256",expiresIn:"10y"});//HS256

// let checkToken = jwt.verify(token, "9995");

// hàm tạo token 
const parseToken = (data) => {
    let token = jwt.sign({data}, "9995", { algorithm: "HS256", expiresIn: "10y" });
    return token
}

const checkToken = (token) => {
    try {
        let check = jwt.verify(token, "9995");
        if (check) {
            return { checkData: true, messags: "" };
        }else{
            return { checkData: false, messags: "token looix" };
        }
    }catch (error) {
        console.log(error.message);
        return { checkData: false, messags: error.message }
    }
}
const verifyToken = (req,res,next)=>{
    const {token} = req.headers;
    const verifyToken = checkToken(token);
    if(verifyToken.checkData){
        next();
    }else{
        res.status(401).send(verifyToken.message)
    }
}
 module.exports = {
    parseToken,
    checkToken,
    verifyToken
 }

