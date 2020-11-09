import React, { useEffect, useState } from "react";
import "./Orders.style.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import OrderItem from "./OrderItem";

function Order() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h3>Your Orders are heree</h3>
      <div className="orders-order">
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default Order;
