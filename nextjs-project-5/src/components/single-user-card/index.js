"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { UserContext } from "@/context";
import { useContext } from "react";



function SingleUserCard({user}) {
  const {currentEditedID , setCurrentEditedID , openPopup , setOpenPopup , addNewUserFormData , setaddNewUserFormData} = useContext(UserContext);

  async function handleDelete(getCurrentUserID) {
      const result = await deleteUserAction(getCurrentUserID,"/user-management")
      console.log(result);
  }

  async function handleEdit(getCurrentUser) {
    setOpenPopup(true);
    setaddNewUserFormData({
      firstName:getCurrentUser?.firstName,
      lastName:getCurrentUser?.lastName,
      email:getCurrentUser?.email,
      address:getCurrentUser?.address
    })
    setCurrentEditedID(getCurrentUser?._id)
  }  

  return (
    <Card>
      <CardHeader>
        <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="gap-5">
        <Button onClick={() => handleEdit(user)}>Edit</Button>
        <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default SingleUserCard;
