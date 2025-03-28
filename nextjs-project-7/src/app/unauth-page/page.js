import { auth } from "@/auth";
import { redirect } from "next/navigation";


async function UnauthPage(){

    const getSession = await auth();
    if(getSession?.user) redirect('/')

    return(
        <div className="p-10">
            <h2 className="text-5xl font-extrabold">
                You are not logged In. Please Log In
            </h2>
        </div>
    )
}
export default UnauthPage