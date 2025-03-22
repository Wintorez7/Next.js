import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  console.log(getAllProducts);

  return (
    <div>
      <h1>Shopping Cart</h1>
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
