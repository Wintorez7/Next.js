import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";


const EditBLog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(req) {
  try {
    await connectToDB();
    const { searchParams } = req.nextUrl;
    const getCurrentBlogID = searchParams.get("id");

    if (!getCurrentBlogID) {
      return NextResponse({
        success: false,
        message: "Blog ID is Required",
      });
    }

    const { title, description } = await req.json();
    const { error } = EditBLog.validate({
      title,
      description,
    });
    

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const updateBLogByBlogID = await Blog.findOneAndUpdate(
      {
        _id: getCurrentBlogID,
      },
      { title, description },
      { new: true }
    );

    if(updateBLogByBlogID){
        return NextResponse.json({
            success:true,
            message:"Blog is Updated Successfully"
        })
    }else{
        return NextResponse.json({
            success: false,
            message: "Something went wrong please try again",
          });
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
}
