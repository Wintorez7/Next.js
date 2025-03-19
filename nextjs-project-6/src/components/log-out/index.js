'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { logoutAction } from "@/action";

function Logout() {

    const router = useRouter();

    async function handleLogout() {
        await logoutAction();
    }

    return ( 
        <Button onClick={handleLogout}>Logout</Button>
     );
}

export default Logout;