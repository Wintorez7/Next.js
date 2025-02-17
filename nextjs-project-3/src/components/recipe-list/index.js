import {
    Card,
    CardContent,
   
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button"
  

const RecipeList = ({recipeList}) => {
    console.log(recipeList);
     
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Button variant="outline" className="bg-black text-white mb-6">
           <Link href={"/"}>Go Home</Link>
        </Button>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                recipeList && recipeList.length > 0 ? 
                recipeList.map(recipe => 
                    <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                        <Card>
                            <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                               <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                    <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="h-full w-full object-cover object-top"
                                    />
                               </div>
                               <div className="p-6">
                                  <h3 className="text-lg text-center font-bold text-gray-800">{recipe.name}</h3>
                                  <div className="m-4 flex items-center flex-wrap ">
                                     <p className="text-lg">Rating : {recipe.rating}</p>
                                    <div className="ml-auto">
                                        <p className="tetx-lg text-gray font-bold">{recipe.cuisine}</p>
                                    </div>
                                  </div>
                               </div>
                               
                            </CardContent>
                        </Card>
                    </Link>
                 ):null
            }
        </div>
    </div> 
  )
}

export default RecipeList