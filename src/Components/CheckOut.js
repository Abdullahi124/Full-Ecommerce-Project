import React from "react";
import "./CheckOut.style.css";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";
function CheckOut() {
  const [{ basket }, disatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="left">
        <h3>Your shopping items</h3>
        {basket.map(({ id, title, price, imageUrl }) => (
          <CheckOutProduct
            id={id}
            title={title}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
      </div>
      <div className="right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
