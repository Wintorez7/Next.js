"use server"

import connectToDB from "@/Database"
import User from "@/models/user";

// add new user action
export async function addNewUserAction(formData) {
    await connectToDB();

    try {
        // validate data using Joi
        const newlyCreatedUser = await User.create(formData)
        if(newlyCreatedUser){
            return({
                success:true,
                message:"User Added Successfully"
            })   
        }
        else{
            return({
                success:false,
                message:"Some error occured! please try again"
            }) 
        } 

    } catch (error) {
        console.log(error)
        return({
            success:false,
            message:"Some error occured! please try again"
        })
    }
}

//fetch users actions



//edit users actions

//delete users actions
