const jwt = require("jsonwebtoken")

// const storage = multer.diskStorage({ 
//     destination: path.join(__dirname + "/uploads"),
//     filename: function (req, file, cb) {
//     const fileExtension = helper.test(file)
//     cb(null, file.fieldname + '-' +new Date().getFullYear()+ "." + fileExtension) 
// }})

const middleWareJWT = (req, res, next) => {
    const token = req.headers.authorization
    const user = jwt.decode(token, process.env.secret_token_jwt)
    const data = user.id
    if(!user || !token) {
        return res.status(401).json({message: "Harap Register atau login dulu"})
    }
    req.payloadUser = user
    
    next()
}


module.exports = {
    middleWareJWT,
    // storage
}