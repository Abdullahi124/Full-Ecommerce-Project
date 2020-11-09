import React from "react";
import "./PhonesProduct.style.css";
import { useStateValue } from "../StateProvider";

function PhonesProduct({ id, title, imageUrl, price }) {
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
    <div className="phone-product">
      <img src={imageUrl} alt="" />
      <div className="phone-content">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default PhonesProduct;
