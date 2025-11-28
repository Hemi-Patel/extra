const jwt=require('jsonwebtoken');
const model=require('../Model/practice_model')
const verifyToken =async (req,res,next)=>{
    let authorization= req.headers.authorization;
    // console.log(authorization);
    if(!authorization){
        return res.json({message:"Authorization is missing......"})
    }
    let token=authorization.split(" ")[1];
    let {userId}=jwt.verify(token,'test');
    const user= await model.findById(userId);
    req.user=user;
    next();
    
}
module.exports=verifyToken;