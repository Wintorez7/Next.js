"use client";
import { addNewUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setaddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveButtonVaild() {
    return Object.keys(addNewUserFormData).every(
      key => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
      const result = await addNewUserAction(addNewUserFormData)
      console.log(result);
      setOpenPopup(false);
      setaddNewUserFormData(addNewUserFormInitialState);
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setaddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddNewUserAction} className="grid gap-4 py-4">
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
                    onChange={(event) =>
                      setaddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: event.target.value,
                      })
                    }
                  />
                </div>
              ))}
          <DialogFooter>
            <Button
              className="disabled:opacity-55"
              disabled = {!handleSaveButtonVaild}
              type="submit">
              Save changes
            </Button>
          </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
