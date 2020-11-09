import React, { useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Components/ShopPage";
import Nav from "./Components/Nav";
import Phones from "./Components/Phones";
import ClothesPage from "./Components/ClothesPage";
import Electronics from "./Components/Electronics";
import HomeAppliance from "./Components/HomeAppliance";
import Cars from "./Components/Cars";
import SignIn from "./Components/SignIn";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import CheckOut from "./Components/CheckOut";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51HSJboDFo0XWipNirqCCAQY3hqL9vz8fe9LpWCI8ud6nwkb4IjJJLkwasvpNjfeQ60m7okHkHZoKAMqhvp55eSSt00NWOqQ6RS"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <CheckOut />
        </Route>
        <Route path="/phones">
          <Header />
          <Nav />
          <Phones />
        </Route>
        <Route path="/clothes">
          <Header />
          <Nav />
          <ClothesPage />
        </Route>
        <Route path="/electronics">
          <Header />
          <Nav />
          <Electronics />
        </Route>
        <Route path="/electronics">
          <Header />
          <Nav />
          <Electronics />
        </Route>

        <Route path="/appliances">
          <Header />
          <Nav />
          <HomeAppliance />
        </Route>
        <Route path="/cars">
          <Header />
          <Nav />
          <Cars />
        </Route>
        <Route path="/shop-page">
          <Header />
          <ShopPage />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/">
          <Header />
          <Banner />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
