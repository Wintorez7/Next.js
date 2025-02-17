import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}


export default async function RecipeDetails({params}) {

    const getRecipedetails = await fetchRecipeDetails(params?.details)

    return(
        <RecipeDetailsItem getRecipedetails={getRecipedetails}/>
    )
}