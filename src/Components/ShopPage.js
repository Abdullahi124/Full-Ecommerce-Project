import React, { useState } from "react";
import Nav from "./Nav";
import Phones from "./Phones";

function ShopPage() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="shop-page">
      <Nav setSelectedOption={setSelectedOption} />
      <Phones selectedOption={selectedOption} />
    </div>
  );
}

export default ShopPage;
