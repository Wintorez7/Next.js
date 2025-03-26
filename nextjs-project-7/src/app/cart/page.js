import { auth } from "@/auth";
import Cart from "@/components/Cart";
import { redirect } from "next/dist/server/api-utils";


async function CartPage() {
    
    const getSession = await auth();
    if(!getSession) redirect("/unauth-page");
    
    return ( 
        <Cart/>
     );
}

export default CartPage;