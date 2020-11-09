import React from "react";
import HomeProduct from "./HomeProduct";
import "./Home.style.css";

function Home() {
  return (
    <div className="home">
      <h3>Our Product Categories</h3>
      <div className="home-row">
        <HomeProduct
          title="Phones and Tablets"
          imageUrl="https://www.smarthub.co.ke/wp-content/uploads/2020/02/smartphones-and-tablets.png"
        />
        <HomeProduct
          title="Clothes"
          imageUrl="https://thetempest.co/wp-content/uploads/2018/04/Untitled-design-1-1.png"
        />
        <HomeProduct
          title="Electronics"
          imageUrl="https://le.co.ke/wp-content/uploads/2020/04/Leviticus-electronics.jpeg"
        />

        <HomeProduct
          title="Home Appliances"
          imageUrl="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1920,h_1080/https://tricor.de/wp-content/uploads/2018/11/home_applience_header_r.jpg"
        />
        <HomeProduct
          title="Cars"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyetQDWhK1jqtCPmCXvT13TEIHSeCyXpuYvw&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
