'use client'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

function AddToCart({ productItem }) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    function handleAddToCart() {
        console.log("adding product with id:", productItem.id);
        dispatch(addToCart(productItem)); // Pass the full product object
    }

    function handleRemoveFromCart() {
        console.log("Removing product with id:", productItem.id);
        dispatch(removeFromCart(productItem.id));
    }

    const isInCart = cartItems.some((item) => item.id === productItem.id);

    return ( 
        <div className="mx-auto">
            <Button className="cursor-pointer" type="button" onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
                {isInCart ? "Remove from Cart" : "Add To Cart"}
            </Button>
        </div>
    );
}

export default AddToCart;
