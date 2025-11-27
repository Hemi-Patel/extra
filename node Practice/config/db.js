const mongoose=require('mongoose');

const db=async () => {
    await mongoose.connect('mongodb+srv://Hemi:hemi1234@cluster0.9ejjpfm.mongodb.net/practice')
    console.log("DB is Connected");
    
}
module.exports=db();