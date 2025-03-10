"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData , setaddNewUserFormData] = useState(addNewUserFormInitialState)

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog open={openPopup} onOpenChange={setOpenPopup}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-rows-4  items-center gap-4">
              {addNewUserFormControls.map((controlItem) => (
                <div key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input 
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    className="col-span-3 mt-2"
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                  />
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
