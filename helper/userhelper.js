const user = require("../models/user")

class UserHelper {
    userIsFound() {
        const isFound = await user.findOne({name: "rizky", isActive: true})
        if(!isFound) {
            return false
        }
        return true
    }
    userIsDeleted() {
        const isDeleted = await user.destroy()
        return isDeleted
    }
   
}