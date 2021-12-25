const {DataTypes, Op} = require("sequelize")
const sequelize = require("../models/index").sequelize
const UserModel = require("../models/user")
const User = UserModel(sequelize, DataTypes)
const debug = require("debug")("http")


module.exports = {
    register: async (req, res) => {
        debug("User berhasil di buat")
        try {
            const data = await User.create(req.body)
            return res.status(200).json({message: "User Berhasil dibuat", data})
        } catch (error) {
            return res.status(500).json({message: "User Tidak Berhasil dibuat"})
        }
    },
}