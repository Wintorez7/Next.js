import { User } from "lucide-react"
import mongoose  from "mongoose"

const userSchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String,

})

const User = mongoose.model.User || mongoose.model('User', userSchema)

export default User;