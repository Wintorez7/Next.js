'use server'

import connectToDB from "@/app/database"
import User from "@/models";
import bcrypt from "bcryptjs"; 

export async function registerUserAction(formdata) {
    await connectToDB(); 
    try {
        const{username,email,password} = formdata;
        const checker = await User.findOne({email})
        
        if(checker){
            return{
                success:false,
                message:"User already exist! Please try with different Email"
            };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newlyCreatedUser = new User({
            username,
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
