import React from "react";
import { useStateValue } from "../StateProvider";
import "./ClothesProduct.style.css";

function ClothesProduct({ id, title, price, imageUrl }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        imageUrl: imageUrl,
        price: price,
        title: title,
      },
    });
  };
  return (
    <div className="clothes-product">
      <img src={imageUrl} alt="" />
      <div className="clothes-content">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default ClothesProduct;
