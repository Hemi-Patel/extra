const express=require('express');
const { AddData, GetData, LoginUser } = require('../Controller/practice_Ctrl');
const uploadImage = require('../Middleware/uploadImage');
const verifyToken = require('../Middleware/verifyToken');
const routes=express.Router();

routes.get('/add',uploadImage.single('profile'),AddData)
<<<<<<< HEAD
routes.get('/getData',verifyToken,GetData)
=======
routes.get('/getData',GetData)
>>>>>>> da3c4fc98e8a66a57d602582422999b850d0283f
routes.get('/loginUser',LoginUser)
module.exports=routes;