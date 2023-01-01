const multer = require('multer');
// const upload = multer({dest:process.cwd()+"/public/img"})
const storage = multer.diskStorage({
    // định nghĩa đường dẫn lưu file
    destination:(req,file,cb)=>{
        cb(null,process.cwd()+"/public/img")
    },
    // đổi tên file khi upload (trước khi lưu file)
    filename:(req,file,cb)=>{
        const un = Date.now()+ '-' + file.originalname // -> tên file gốc
        cb(null,un)
    }

})
const upload = multer({storage})

module.exports={
    upload
}