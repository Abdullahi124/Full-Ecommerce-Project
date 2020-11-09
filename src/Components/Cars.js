import React from "react";
import "./Cars.style.css";
import CarsProduct from "./CarsProduct";

function Cars() {
  return (
    <div className="cars">
      <h4>Cars</h4>
      <div className="cars-row">
        <CarsProduct
          id="84932"
          title="cars"
          price={5678}
          imageUrl="https://i.ytimg.com/vi/7PXLPzcIydw/hqdefault.jpg"
        />
        <CarsProduct
          id="2098"
          title="cars"
          price={3451}
          imageUrl="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
        />
        <CarsProduct
          id="5729"
          title="cars"
          price={3015}
          imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg"
        />
        <CarsProduct
          id="29821"
          title="cars"
          price={3891}
          imageUrl="https://www.jamesedition.com/stories/wp-content/uploads/2018/02/8f35ba26fe296e36b3a96ee5416259b4.jpg"
        />
        <CarsProduct
          id="398390"
          title="cars"
          price={9870}
          imageUrl="https://media.caradvice.com.au/image/private/q_auto/v1578625000/nccvjom7pgi5jolixcza.jpg"
        />
      </div>
    </div>
  );
}

export default Cars;
