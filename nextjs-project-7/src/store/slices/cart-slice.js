import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems:[]
}

const cardSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addToCart(state,action){
            console.log(state,action)
            state.cartItems.push(action.payload);
        },
        removeFromCart(state,action){   
            let copyCartItem = [...state.cartItems];
            copyCartItem = copyCartItem.filter(item => item.id !== action.payload);
            console.log(state,action)
            state.cartItems = copyCartItem;

        }
    }
})

export const {addToCart , removeFromCart} = cardSlice.actions
export default cardSlice.reducer