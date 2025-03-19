'use server'

import connectToDB from "@/app/database"
import User from "@/models";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function registerUserAction(formdata) {
    await connectToDB(); 
    try {
        const{userName, email, password} = formdata;
        const checker = await User.findOne({email})

         // ✅ Check if all fields are provided
        if (!userName || !email || !password) {
            return { success: false, message: "All fields are required." };
        }

        if(checker){
            return{
                success:false,
                message:"User already exist! Please try with different Email"
            };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newlyCreatedUser = new User({
            username: userName,
            email,
            password:hashedPassword,
        });

        const savedUser = await newlyCreatedUser.save();
        if(savedUser){
            return{
                success:true,
                data : JSON.parse(JSON.stringify(savedUser))
            }
        }else{
            return{
                success:false,
                message:"Someting went Wrong Please try Agin"
            }
        }

    } catch (error) {
        console.log(error)
        return {
            success:false,
            message:"Something went Wrong"
        }
    }
}   

export async function loginUserAction(formdata) {
    await connectToDB();

    try {
        const {email , password} = formdata;

        

        // check user is exist or not
        const checkUser = await User.findOne({email})
        if(!checkUser){
            return{
                success:false,
                message:"User Doesn't Exist! Please Create a Account"
            }
        }

        // check password is correct or not
        const checkPassword = await bcrypt.compare(password, checkUser.password); // FIXED: changed hashedPassword to password
        if (!checkPassword) {
            return {
                success: false,
                message: "Password is Incorrect Please Check"
            };
        }
        const createTokenData = {
            id: checkUser._id,
            username: checkUser.username,
            email: checkUser.email,
        }

        const token = jwt.sign(createTokenData, "DEFAULT_KEY", {
            expiresIn: "1d", // FIXED: changed "Id" to "1d"
        });

        const getCookies = cookies();
        getCookies.set('token', token);

        return{
            success:true,
            message:"Login Successfull"
        }

    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went Wrong"
        }
    }
}

export async function fetchAuthUserAction() {
    await connectToDB();
    try {
        const getCookies = await cookies();
        const token =  getCookies.get("token")?.value || "";
        if(token == ''){
            return{
                success:false,
                message:"Token is Invalid"
            }
        }
        const decodedToken = jwt.verify(token, 'DEFAULT_KEY');
        const getUserInfo =  await User.findOne({_id: decodedToken.id });

        if(getUserInfo){
            return{
                success:true,
                data: JSON.parse(JSON.stringify(getUserInfo))
            }
        }else{
            return{
                success:false,
                message:"Some Error Occured! Please try agin"
            }
        }
        
    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
    }
}

export async function logoutAction() {
    const getCookies = cookies();
    getCookies.set('token',"")
}