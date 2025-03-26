"use client";

import { loginUserAction } from "@/action";
import CommonFormElement from "@/components/form-Element/page";
import { Button } from "@/components/ui/button";
import { initialLoginFormData, userLoginFormControls } from "@/utils";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();

  async function handleSignIn(event) {
    event.preventDefault(); // Prevent default form submission
    const result = await loginUserAction(signInFormData);
    console.log(result);
    if (result?.success) router.push("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login Page
        </h1>
        <form className="space-y-4" onSubmit={handleSignIn}>
          {userLoginFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label className="text-md px-4 font-medium text-gray-700">
                {controlItem.label}
              </Label>
              <CommonFormElement
                currentItem={controlItem}
                value={signInFormData[controlItem.name] || ""}
                onChange={(event) =>
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />  
            </div>
          ))}
          <Button type="submit" className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
