const multer=require('multer');
const path=require('path')

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,path.join(__dirname,'../Upload'));
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})
module.exports=multer({storage:storage})