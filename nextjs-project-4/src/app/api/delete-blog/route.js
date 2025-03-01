import connectToDB from "@/database";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.URL);
        const getCurrentBlogID = searchParams.get('id')

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong Please Try again"
        })
    }
}