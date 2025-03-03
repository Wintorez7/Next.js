"use client";
import React, { useEffect, useState } from "react";
import AddNewBlog from "../add-new-Blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";

const initialFormData = {
  title: "",
  description: "",
};

export const BlogOverView = ({ blogList }) => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialFormData);
  const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);

  const router = useRouter();

  // Refreshing the page after actions, but preventing unnecessary refreshes
  useEffect(() => {
    router.refresh();
  }, []);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const apiResponse = currentEditedBlogID !== null ? 
      await fetch(`/api/update-blog?id=${currentEditedBlogID}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogFormData)
      })
      : await fetch("/api/add-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogFormData),
      });

      const result = await apiResponse.json();
      if (result?.success) {
        setBlogFormData(initialFormData);
        setOpenBlogDialog(false);
        setLoading(false)
        setCurrentEditedBlogID(null)
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteBlogID(blogID) {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${blogID}`, {
        method: "DELETE",
      });

      const result = await apiResponse.json();
      if (result?.success) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }

  function handleEdit(blogItem) {
    setCurrentEditedBlogID(blogItem?._id);
    setBlogFormData({
      title: blogItem?.title,
      description: blogItem?.description,
    });
    setOpenBlogDialog(true);
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
        currentEditedBlogID={currentEditedBlogID}
        setCurrentEditedBlogID={setCurrentEditedBlogID}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem, index) => (
            <Card key={blogItem._id || index} className="p-5 flex">
              <CardContent>
                <CardTitle className="mb-5 text-3xl">{blogItem?.title}</CardTitle>
                <CardDescription className="text-lg">{blogItem?.description}</CardDescription>
                <div className="mt-5 flex gap-5 justify-center items-center">
                  <Button disabled={loading} onClick={() => handleEdit(blogItem)}>
                    Edit
                  </Button>
                  <Button disabled={loading} onClick={() => handleDeleteBlogID(blogItem._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="text-white text-6xl space-x-2 font-semibold">
            No Blog Found! Please Add One
          </Label>
        )}
      </div>
    </div>
  );
};
