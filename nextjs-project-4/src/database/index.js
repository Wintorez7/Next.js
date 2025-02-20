import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://mohankumhar2024:mohankumhar2024@cluster0.hzxvn.mongodb.net/"

    mongoose.connect(connectionUrl)
            .then(() => console.log('blog database connection is succesfull'))
            .catch((error) => console.log(error));
}

export default connectToDB;