import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.style.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
function Header() {
  const history = useHistory();
  const [{ user, basket }] = useStateValue();

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="logo">
        <span onClick={(e) => history.push("/")}>Believer</span>
      </div>

      <nav className="header-nav">
        <div className="nav-options">
          <span onClick={(e) => history.push("/shop-page")}>Shop Page</span>
        </div>
        <Link to={!user && "/sign-in"}>
          <div onClick={signOut} className="nav-options">
            <span>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="nav-options">
            <span>Your Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="nav-options">
            <ShoppingCartIcon />
            <span>{basket.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
