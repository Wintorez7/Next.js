import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const Blog = mongoose.model.BLog || mongoose.model('Blog',BlogSchema)

export default Blog; 