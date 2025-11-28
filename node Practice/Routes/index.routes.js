const express=require('express');
const { AddData, GetData, LoginUser } = require('../Controller/practice_Ctrl');
const uploadImage = require('../Middleware/uploadImage');
const verifyToken = require('../Middleware/verifyToken');
const routes=express.Router();

routes.get('/add',uploadImage.single('profile'),AddData)
routes.get('/getData',GetData)
routes.get('/loginUser',LoginUser)
module.exports=routes;