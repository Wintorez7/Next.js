"use server"

import connectToDB from "@/Database"

// add new user action
export async function addNewUserAction(formData) {
    await connectToDB();

    try {
        // validate data using Joi
        const newlyCreatedUser = 

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
