const {DataTypes, Op} = require("sequelize")
const sequelize = require("../models/index").sequelize
const UserModel = require("../models/user")
const User = UserModel(sequelize, DataTypes)


module.exports = {
    register: async (req, res) => {
        try {
            const data = await User.create(req.body)
            return res.status(200).json({message: "User Berhasil dibuat", data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "User Tidak Berhasil dibuat"})
        }
    },
}