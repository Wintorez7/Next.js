import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/product-card";
import { redirect } from "next/navigation";

export default async function Home() {

  const getSession = await auth();
  console.log(getSession)

  if(!getSession?.user) redirect("/unauth-page")

  const getAllProducts = await fetchAllProducts();


  return (
    <div>
      {/* <h1>Shopping Cart</h1> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map((productItem) => (
              <ProductCard key={productItem.id} item={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}
