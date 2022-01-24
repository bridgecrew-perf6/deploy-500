require("dotenv").config();

const express = require("express")
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
const db = require("./helper/relation");
const swaggerjs = require("./helper/swagger")
const { middleWareJWT } = require("./Middleware/Middleware");
const swaggerJsDoc = require("swagger-jsdoc");
const userRoutes = require("./Routes/User")
const swaggerUI = require("swagger-ui-express");
const app = express()

const { Product, User, ImageUser, Image } = db;

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./Routes/*.js"]
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.use(userRoutes)

app.post("/user", middleWareJWT, async (req, res) => {
  await User.create(req.body);
  res.json({ message: "created" });
});


app.post("/product", async (req, res) => {
  await Product.create(req.body);
  res.json({ message: "created" });
});

app.get("/get", async (req, res) => {
  const data = await User.findAll({
      attributes: ["id", "username"],
      paranoid: false,
      benchmark: true,
      order: [["id", "ASC"]],
    offset: JSON.parse(req.query.page * req.query.size), // <<<< ini page
    limit: JSON.parse(req.query.size), // <<<< jumlah isi dari page
    include: [{ model: Product }],
  });
  res.status(201).json({ data });
});

app.delete("/delete", async (req, res) => {
    const data = await User.destroy({where: {id: 1}})
    res.json({ data });
  });

app.get("/image", async (req, res) => {
  const data = await Image.findAll({
    include: [{ model: User, through: {} }],
  });
  res.json({ data });
});

app.post("/image", async (req, res) => {
  const data = await Image.create(req.body);
  req.body.imageId = data.dataValues.id;
  await ImageUser.create(req.body);
  res.json(data);
});


app.get("/logout", async (req, res) => {
  res.status(200).json({ message: "sudah logout" });
});

module.exports = app