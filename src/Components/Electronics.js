import React from "react";
import "./Electronics..style.css";
import "./ElectronicsProduct";
import ElectronicsProduct from "./ElectronicsProduct";

function Electronics() {
  return (
    <div className="electronic">
      <h4>Laptops</h4>
      <div className="electronic-row">
        <ElectronicsProduct
          id="80910"
          title="Hp"
          price={456}
          imageUrl="https://dovecomputers.co.ke/wp-content/uploads/2019/05/Lenovo-Ideapad-130151KB-min-4-300x300.jpg"
        />
        <ElectronicsProduct
          id="83924"
          title="Pavillion"
          price={987}
          imageUrl="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg"
        />
        <ElectronicsProduct
          id="4209"
          title="Mac"
          price={397}
          imageUrl="https://www.gadgetworld.co.ke/wp-content/uploads/2018/11/Dell-XPS-9370-Laptop.jpeg"
        />
        <ElectronicsProduct
          id="35673"
          title="Light"
          price={908}
          imageUrl="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06546888.png?imwidth=278&imdensity=1"
        />
      </div>
      <h4>Tv</h4>
      <div className="electronic-row">
        <ElectronicsProduct
          id="83198"
          title="Samsung Tv"
          price={1243}
          imageUrl="https://hotpoint.co.ke/media/products/32_EL9mWCt.jpg"
        />
        <ElectronicsProduct
          id="9230"
          title="HD Tv"
          price={498}
          imageUrl="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/476892/3.jpg?7820"
        />
        <ElectronicsProduct
          id="2325"
          title="Unity Tv"
          price={765}
          imageUrl="https://le.co.ke/wp-content/uploads/2019/11/01_RU7300-L-Perspective-Black-031519.jpg"
        />
        <ElectronicsProduct
          id="84387"
          title="Fan Tv"
          price={345.65}
          imageUrl="https://i.roamcdn.net/hz/pi/listing-gallery-full-1920w/18eca8ec95d5a3379b860ab3f0e8b463/-/horizon-files-prod/pi/picture/qr8qrkn/e4f0702fcf4a268bed55305ea3c08fd97da8d94c.jpeg"
        />
      </div>
      <h4>Desktop</h4>
      <div className="electronic-row1">
        <ElectronicsProduct
          id="9430"
          title="Desktop"
          price={567.0}
          imageUrl="https://techbuyz.co.ke/wp-content/uploads/2020/02/hewlett-packard-dell-all-in-one-desktop-computers-computer-desktop-pc.png"
        />
        <ElectronicsProduct
          id="3298"
          title="Desktop"
          price={897.08}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Bkd_W9AuBqIou4ER8EVjtKS2vwVFkwNoxQ&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Electronics;
