"use server"

import connectToDB from "@/Database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// add new user action
export async function addNewUserAction(formData, pathToRevalidate) {
    await connectToDB();

    try {
        // validate data using Joi
        const newlyCreatedUser = await User.create(formData)
        if(newlyCreatedUser){
            revalidatePath(pathToRevalidate);
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
export async function fetchUserActions() {

    await connectToDB();

    try {
        const ListOfUserData = await User.find({});
        if(ListOfUserData){
            return({
                success:true,
                data:JSON.parse(JSON.stringify(ListOfUserData))
            })
        }else{
            return({
                success: false,
                message:"Something went Wrong Data Not fetched"
            })
        }
    } catch (error) {
        console.log(error)
        return({
            success: false,
            message:"Something went Wrong"
        })
    }
}


//edit users actions
export async function editUserAction(currentUserID,formData,pathToRevalidate) {
    await connectToDB();

    try {
        
        const {firstName,lastName,email, address} = formData

        const updatedUser = await User.findOneAndUpdate({
            _id : currentUserID,
        },{firstName,lastName,email,address})
        
     if(updatedUser){
        revalidatePath(pathToRevalidate)
        return{
            success:true,
            message:"user Updated Succesfully"
        }
     }else{
        return{
            success:false,
            message:"Not able to Update user! Please try again"
        }
     }

    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Some Error Occured! Please try again"
        }
    }
}


//delete users actions
export async function deleteUserAction(currentUserID , pathToRevalidate) {
    await connectToDB();
    try {
        const deleteUser = await User.findByIdAndDelete(currentUserID);
        if(deleteUser){
            revalidatePath(revalidatePath,"/user-management")
            return{
                success:true,
                message:"User Deleted successfully"
            }
        }else{
            return{
                success:false,
                message:"Not able to Perform Delete Operation"
            }
        }

    } catch (error) {
        console.log(error)
        return({
            success:false,
            message:"Something went wrong"
        })
    }
}