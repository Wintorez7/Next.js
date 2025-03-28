"use client";

import { registerUserAction } from "@/action";
import CommonFormElement from "@/components/form-Element/page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { userRegistrationFormControls, initialSignUpFormData } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignUp() {
  const [signupFormData, setSignupFormData] = useState(initialSignUpFormData);
  const [emailError, setEmailError] = useState(""); // State for email validation error
    
    const router = useRouter()

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleSignupfunctionValid(){
          return Object.keys(signupFormData).every(key => signupFormData[key].trim() !== '') &&
          isValidEmail(signupFormData.email) // Check email validity
    }

    function handleInputChange(event) {
      const { name, value } = event.target;
      setSignupFormData({
        ...signupFormData,
        [name]: value,
      });
  
      // Email validation on input change
      if (name === "email") {
        if (!isValidEmail(value)) {
          setEmailError("Invalid email format.");
        } else {
          setEmailError("");
        }
      }
    }


    async function handleSignUp(){
        const result = await registerUserAction(signupFormData);
        console.log(result)

        if (!isValidEmail(signupFormData.email)) {
          setEmailError("Invalid email format.");
          return; // Stop submission if email is invalid
        }

        if(result?.data) router.push('/sign-in')
    }

  return (
    <div>
      <h1 className="text-center mt-5 text-2xl">Welcome To Registration</h1>
      <form action={handleSignUp} className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        {userRegistrationFormControls.map((controlItem) => (
          <div key={controlItem.name} className="flex flex-col gap-1">
            <Label  className="text-gray-700 font-medium">{controlItem.label}</Label>
            <CommonFormElement
             className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name={controlItem.name}
              value={signupFormData[controlItem.name] || ""}
              currentItem={controlItem}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <Button type="submit" disabled={!handleSignupfunctionValid()}  className="disabled:opacity-65">
            Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
