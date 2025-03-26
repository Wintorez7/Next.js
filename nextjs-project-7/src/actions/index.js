"use server"

import { signIn, signOut } from "@/auth";

// get all products

export async function fetchAllProducts() {
    try {
        const result = await fetch('https://dummyjson.com/products',{
            method : 'GET',
            cache : 'no-cache'
        })
        const data = await result.json();

        return{
            success:true,
            data: data?.products
        }
    } catch (error) {
        console.log(error)
        return{
            message:"Something went wrong",
            success:false
        }
    }
}

export async function fetchProductDetails(currentProductID) {
    try {
        const result = await fetch(`https://dummyjson.com/products/${currentProductID}`,{
            method : 'GET',
            cache : 'no-store'
        })
        const data = await result.json();

        return data
    } catch (error) {
        console.log(error)
        return{
            message:"Something went wrong",
            success:false
        }
    }
}

export async function loginAction() {
    await signIn("github")
}

export async function logoutAction() {
    await signOut();
}