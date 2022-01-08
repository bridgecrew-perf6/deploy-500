const sequelize = require("../models/index").sequelize
const {DataTypes} = require("sequelize")

const User = require("../models/user")(sequelize, DataTypes)
const Product = require("../models/product")(sequelize, DataTypes)
const Image = require("../models/image")(sequelize, DataTypes)
const ImageUser = require("../models/imageuser")(sequelize, DataTypes)

Product.belongsTo(User, {foreignKey: "userId"})
User.hasOne(Product, {foreignKey: "userId"})

User.belongsToMany(Image, {through: ImageUser,foreignKey: "userId"})
Image.belongsToMany(User, {through: ImageUser, foreignKey: "imageId"})


module.exports = {
    User,
    Product,
    Image,
    ImageUser
}