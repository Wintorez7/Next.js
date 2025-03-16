import mongoose  from "mongoose";


const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://mohanKumhar:MK2025@cluster0.x8w3p.mongodb.net/'
    mongoose.connect(connectionUrl)
            .then(() => console.log("Auth Databse Connection Succesfull"))
            .catch((e) => console.log(e))
}

export default connectToDB;