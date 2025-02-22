import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://mohankumhar2024:mohankumhar2024 @cluster0.8okzk.mongodb.net/"
    console.log(connectionUrl)
    console.log("connecting to db");
    
    mongoose.connect(connectionUrl)
            .then(() => console.log('blog database connection is succesfull'))
            .catch((error) => console.log(error));
}

export default connectToDB;