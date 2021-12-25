require("dotenv").config()
const express = require("express")

const UserRoute = require("./Routes/User")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/", (req, res) => {
    res.send("")
})


app.use(UserRoute)

app.listen(process.env.PORT, () => console.log("Listening at port: " + process.env.PORT))