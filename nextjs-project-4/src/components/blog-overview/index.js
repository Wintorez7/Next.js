"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AddNewBlog from "../add-new-Blog";

const initialFormData = {
  title: "",
  desscription: "",
};

export const BlogOverView = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialFormData);

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
      />
      <div>
        <Button>Blog List Section</Button>
      </div>
    </div>
  );
};
