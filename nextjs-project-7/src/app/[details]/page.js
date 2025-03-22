import { fetchProductDetails } from "@/actions";
import AddToCart from "@/components/add-to-cart";
import { Button } from "@/components/ui/button";

  async function ProductDetails({params}) {
    
    
    const getProductDetails = await fetchProductDetails(params.details);
    console.log(getProductDetails)

    return ( 
        <div className="max-w-6xl mx-auto flex  h-[100vh] bg-gray-200 ">
            <div className="w-full p-5 h-full flex  items-center">
                <div className="w-full flex flex-col gap-5">
                  <img className=" shadow-2xl mx-auto" src={getProductDetails?.thumbnail}/>    
                  <Button className="bg-orange-500 mx-auto w-[20%] cursor-pointer">Buy</Button>  
                  {/* <Button className="w-[50%] mx-auto">Add To Cart</Button> */}
                  <AddToCart productItem={getProductDetails}/>
                </div>          
            </div>
            <div className="w-full h-full flex justify-center flex-col bg-red-200">              
                <div className="w-full h-[50%]">
                    <h1 className="text-4xl py-2 px-4 font-semibold">{getProductDetails?.title}</h1>
                    <h1 className="px-4 py-2 text-xl font-semibold">{getProductDetails?.description}</h1>
                    <h1 className="px-4 py-2 text-xl font-semibold">Rating :-{getProductDetails?.rating}⭐</h1> 
                    <h1 className="px-4 py-2 text-xl font-semibold">Price :-${getProductDetails?.price}</h1>                    
                </div>             
            </div>
        </div>
     );
}

export default ProductDetails;