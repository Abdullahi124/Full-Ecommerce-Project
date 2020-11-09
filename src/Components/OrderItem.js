import React from "react";
import "./OrderItem.style.css";
import momemt from "moment";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";

function OrderItem({ order }) {
  return (
    <div className="order">
      <h2 className="order-title">Order</h2>
      <p>{momemt.unix(order.data.created).format("MMM Do YYYY , h:ma")}</p>
      <p className="order-id">{<small>{order.id}</small>}</p>

      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total {value} </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default OrderItem;
