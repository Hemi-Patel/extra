const model = require("../Model/practice_model")
const path = require('path')
const bcrypt = require('bcrypt')

module.exports.AddData = async (req, res) => {
    try {
        if (req.file) {
            req.body.profile = `/Upload/${req.file.filename}`
        } else {
            req.body.profile = " "
        }
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }
        // console.log(req.body);

        await model.create(req.body)
        return res.json({ mesage: "success" })
    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server Error...", status: "500" });

    }
}
module.exports.GetData = async (req, res) => {
    try {
        let data=await model.find();
        // console.log(data);
        return res.json({data:data, status: "500" });
        

    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server Error...", status: "500" });
    }
}