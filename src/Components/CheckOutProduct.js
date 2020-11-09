import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckOutProduct.style.css";

function CheckOutProduct({ id, title, imageUrl, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img src={imageUrl} alt="" />
      <div className="checkout-content">
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      {!hideButton && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
      )}
    </div>
  );
}

export default CheckOutProduct;
