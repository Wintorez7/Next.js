import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";


const AddNewBLog = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
})


export async function POST(req) {
    try {
        const extractBlogData = await req.json();
        console.log(extractBlogData)
        
        await connectToDB();

        const {title , description} = extractBlogData;
        const {error} = AddNewBLog.validate({
            title,description
        })
        console.log(extractBlogData)

        if(error){
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }

        const newlyCreatedBlogItem = await Blog.create(extractBlogData);
        if(newlyCreatedBlogItem){
            return NextResponse.json({
                success: true,
                message: "Blog Added Successfully"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Something went wrong ! please try again"
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! please try again"
        })
    }
}