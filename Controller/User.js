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
    exampleGet: async (req, res) => {
        const data = await User.findAll()
        console.log(data)
        res.status(201).json({message: "User berhasil dibuat", data})
    },
    exampleGetOne: async (req, res) => {
        const data = await User.findOne({where: {id: req.params.id}})
        console.log(data)
        res.status(201).json({message: "User berhasil dibuat", data})
    },
    exampleUpdate: async (req, res) => {
        const data = await User.update(req.body, {where: {id: req.params.id}})
        console.log(data)
        res.status(201).json({message: "User berhasil dibuat", data})
    },
    exampleDelete: async (req, res) => {
        console.log(req.params.id)
        const data = await User.destroy({where: {id: req.params.id}})
        console.log(data)
        res.status(201).json({message: "User berhasil dibuat", data})
    }
}