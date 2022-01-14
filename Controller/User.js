const UserModel = require("../models/user");
const {DataTypes} = require("sequelize");
const sequelize = require("../models/index").sequelize;

const User = UserModel(sequelize, DataTypes)


module.exports = {
    register: async (req, res) => {
        try {
            const data = await User.findOne({where: 1})
            console.log(data)
            res.status(201).json({message: "User berhasil dibuat", data})
        } catch (error) {
            res.status(500).json({message: "User Tidak Berhasil dibuat"})
        }
    },
    sum: (number) => {
        return number + 2 
    }
}