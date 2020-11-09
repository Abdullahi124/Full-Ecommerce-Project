import React from "react";
import { useHistory } from "react-router-dom";
import "./HomeProduct.style.css";

function HomeProduct({ id, title, imageUrl }) {
  const history = useHistory();
  return (
    <div className="home-product">
      <img src={imageUrl} alt="" />
      <div className="home-content">
        <h3>{title.toUpperCase()}</h3>
        <button onClick={(e) => history.push("/shop-page")}>Go Shop</button>
      </div>
    </div>
  );
}

export default HomeProduct;
