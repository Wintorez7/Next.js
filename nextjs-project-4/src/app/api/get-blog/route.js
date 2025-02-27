import connectToDB from "@/database";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectToDB();
        const extractAllBlogsDatabase = await Blog.find({})

        if(extractAllBlogsDatabase){
            return NextResponse.json({
                success: true,
                data : extractAllBlogsDatabase
            })
        }else{
            return NextResponse.json({
                success: false,
                message: 'Something Went Wrong Please Try Again'
            })
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: 'Something Went Wrong Please Try Again'
        })
    }
}