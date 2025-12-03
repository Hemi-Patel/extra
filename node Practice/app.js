const express =require('express');
const path=require('path')
const port =8001;
const app=express();
const cors=require('cors')

const db=require('./config/db')

app.use(express.urlencoded())
app.use(express.json())

app.use(cors())
app.use('/Upload', express.static('Upload'));

app.use('/',require('./Routes/index.routes'))

app.listen(port,(err)=>{
    (err)?console.log(err):console.log(`server is running at http://localhost:${port}`);    
})