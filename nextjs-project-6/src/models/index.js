import { User as LucideUser } from "lucide-react"; // Rename the imported User to avoid conflict
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
});

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
