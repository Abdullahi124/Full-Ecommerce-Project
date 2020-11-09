import React from "react";
import { useStateValue } from "../StateProvider";
import "./HomeAProducts.style.css";

function HomeAProducts({ id, title, price, imageUrl }) {
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
    <div className="appliance-product">
      <img src={imageUrl} alt="" />
      <div className="appliance-content">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default HomeAProducts;
