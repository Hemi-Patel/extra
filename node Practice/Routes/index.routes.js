const express=require('express');
const { AddData, GetData } = require('../Controller/practice_Ctrl');
const uploadImage = require('../Middleware/uploadImage');
const routes=express.Router();

routes.get('/add',uploadImage.single('profile'),AddData)
routes.get('/getData',GetData)
module.exports=routes;