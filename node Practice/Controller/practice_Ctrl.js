const model = require("../Model/practice_model")
const path = require('path')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
        let data = await model.find();
        // console.log(data);
        return res.json({ data: data, status: "500" });


    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server Error...", status: "500" });
    }
}
module.exports.LoginUser = async (req, res) => {
    try {
        const existUser = await model.findOne({ email: req.body.email })
        if (existUser) {
            let matchPassword = await bcrypt.compare(req.body.password,existUser.password);
            if (matchPassword) {
                let token = await jwt.sign({ userId: existUser._id }, "test")
                // console.log(token);
                  return res.json({ message: "Login Success...", data: token });

            } else {
                return res.json({ message: "Invalid Credential....", status: "500" });
            }
        } else {
            return res.json({ message: "User Not Found...,Please Register First", status: "500" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server Error...", status: "500" });
    }
}