import mongoose from "mongoose";


const connectToDB = async () => {
    const url = 'mongodb+srv://mohanKumhar:MK2025@cluster0.ftkd8.mongodb.net/';

    mongoose.connect(url)
            .then(() => console.log('Database connection Successful'))
            .catch((e) => console.log(e))
}

export default connectToDB