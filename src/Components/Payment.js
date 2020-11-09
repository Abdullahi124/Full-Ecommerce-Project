import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Payment.style.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "./axios";
import { db } from "../firebase";

function Payment() {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special secret stripe which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currency subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("The Client Secret is ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent=payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    history.push("/orders");
  };

  const handleChange = (e) => {
    //listen for changes in the card element
    // dispplay any error as the customer types the card details

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <h2 onClick={(e) => history.push("/checkout")}>
        CheckOut ({basket.length}{" "}
        {basket.length === 0 || basket.length === 1 ? "item" : "items"} )
      </h2>
      <div className="payment-details">
        <div className="payment-title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment-address">
          <p>{user?.email}</p>
          <p>123 React Master</p>
          <p>Nairobi Kenya</p>
        </div>
      </div>
      <div className="payment-details">
        <div className="payment-title">
          <h3>Delivery Items</h3>
        </div>
        <div className="payment-items">
          {basket.map(({ id, imageUrl, price, title }) => (
            <CheckOutProduct
              id={id}
              imageUrl={imageUrl}
              title={title}
              price={price}
            />
          ))}
        </div>
      </div>
      <div className="payment-details">
        <div className="payment-title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment-method">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment-price">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total : {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {/*Error */}
            {error && <div>{error} </div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
