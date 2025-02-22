"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AddNewBlog from "../add-new-Blog";

const initialFormData = {
  title: "",
  description: "",
};

export const BlogOverView = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialFormData);

  console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      setLoading(true)
      const apiResponse = await fetch('/api/add-blog',{
        method : 'POST',
        body : JSON.stringify(blogFormData)
      })
      const result = await apiResponse.json();
      if(result?.success){
        setBlogFormData(initialFormData);
        setOpenBlogDialog(false);
        setLoading(false)
      }
      console.log(result)
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialFormData);
    }
  }
  

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div>
        <Button>Blog List Section</Button>
      </div>
    </div>
  );
};
