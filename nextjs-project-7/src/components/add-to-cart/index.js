"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

function AddToCart({productItem}) {
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);
  const dispatch = useDispatch();

  function handleAddToCart() {
      dispatch(addToCart(productItem)); // Pass the full product object
  }

  function handleRemoveFromCart() {
      dispatch(removeFromCart(productItem?.id));
  }


  return (
    <div className="mx-auto">
      <Button className="cursor-pointer" type="button" 
      onClick={cart?.cartItems.some(item=>item.id === productItem.id) ? handleRemoveFromCart : handleAddToCart}>
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from Cart"
          : "Add To Cart"}
      </Button>
      {/* onClick={isInCart ? handleRemoveFromCart : handleAddToCart} */}
    </div>
  );
}

export default AddToCart;
