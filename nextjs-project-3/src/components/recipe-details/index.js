import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function RecipeDetailsItem({getRecipedetails}){  
    return(
        <div>
            <Button variant="outline" className="bg-black text-white">
               <Link href={"/recipe-list"}>Go to RecipeList</Link>
            </Button>
            
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                    <img
                        src={getRecipedetails?.image}
                        name={getRecipedetails?.name}
                        className="w-4/5 rounded object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">{getRecipedetails.name}</h2>
                    <div className=" gap-4 mt-5">
                        <p className="text-xl font-semibold text-gray-600">{getRecipedetails?.mealType[0]}</p>
                    </div>
                    <div className="mt-5">
                        <p className="text-xl font-semibold text-gray-600">{getRecipedetails?.cuisine}</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-extrabold text-gray-700">Ingredient</h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm" >
                            {
                                getRecipedetails?.ingredients.map((item,index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        </div>
    )
}