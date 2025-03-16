'use client'

import CommonFormElement from "@/components/form-Element/page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";



function SignUp(){

    const[signupFormData , setSignupFormData] = useState(initialSignUpFormData)

    return(
        <div>
            <h1>Welcome To Registration</h1>
            <form>
               {
                userRegistrationFormControls.map(controlItem => 
                    <div>
                        <Label>{controlItem.Label}</Label>
                        <CommonFormElement currentItem={controlItem}/>
                    </div>
                )    
               }
            </form>
        </div>
    )
}

export default SignUp;