import mongoose  from "mongoose";


const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://mohankumhar:MK2025@cluster0.uo7g4.mongodb.net/'
    mongoose.connect(connectionUrl)
            .then(() => console.log("Auth Databse Connection Succesfull"))
            .catch((e) => console.log(e))
}

export default connectToDB;