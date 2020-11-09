import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.style.css";

function Nav() {
  const history = useHistory();
  return (
    <div className="nav">
      <h3 onClick={() => history.push("/phones")}>Phones and Tablets</h3>
      <h3 onClick={() => history.push("/clothes")}>Clothes</h3>
      <h3 onClick={() => history.push("/electronics")}>Electronics</h3>
      <h3 onClick={() => history.push("/appliances")}>Home Appliances</h3>
      <h3 onClick={() => history.push("/cars")}>Cars</h3>
    </div>
  );
}

export default Nav;
