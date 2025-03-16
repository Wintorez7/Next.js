"use client";

import CommonFormElement from "@/components/form-Element/page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userRegistrationFormControls, initialSignUpFormData } from "@/utils";
import { useState } from "react";

function SignUp() {
  const [signupFormData, setSignupFormData] = useState(initialSignUpFormData);
    console.log(signupFormData)
  return (
    <div>
      <h1>Welcome To Registration</h1>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        {userRegistrationFormControls.map((controlItem) => (
          <div key={controlItem.name} className="flex flex-col gap-1">
            <Label  className="text-gray-700 font-medium">{controlItem.label}</Label>
            <CommonFormElement
             className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name={controlItem.name}
              value={signupFormData[controlItem.name] || ""}
              currentItem={controlItem}
              onChange={(event) => setSignupFormData({
                ...signupFormData,
                [event.target.name]:event.target.value
              })}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default SignUp;
