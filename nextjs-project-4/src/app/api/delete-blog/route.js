import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.URL);
        const getCurrentBlogID = searchParams.get('id')

        if(!getCurrentBlogID){
            return NextResponse.json({
                success : false,
                message : 'Blog ID is Required'
            })
        }
        
        const deleteCurrentBlogID = await Blog.findByIdAndDelete(getCurrentBlogID)
        if(deleteCurrentBlogID){
            return NextResponse.json({
                success:true,
                message: "Blog Deleted Successfully"
            });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong Please Try again"
        })
    }
}