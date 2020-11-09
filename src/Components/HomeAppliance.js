import React from "react";
import "./HomeAppliance.style.css";
import HomeAProducts from "./HomeAProducts";
function HomeAppliance() {
  return (
    <div className="home-appliance">
      <h4>The home appliances</h4>
      <div className="appliances-row">
        <HomeAProducts
          id="833298"
          title="Furniture"
          price={345}
          imageUrl="https://i.pinimg.com/originals/1a/6f/c7/1a6fc7cc1924c5025f3deb2e73fdafe3.jpg"
        />
        <HomeAProducts
          id="24710"
          title="Home Decor"
          price={845}
          imageUrl="https://www.globalguds.com/wp-content/uploads/2018/03/1-12-1-300x300.jpg"
        />
        <HomeAProducts
          id="83493"
          title="Tv Stand"
          price={1345}
          imageUrl="https://alladin.co.ke/media/catalog/product/cache/1/thumbnail/600x/de5c9b070af9964f9f77c5c09cdbde18/1/0/10_2_1_1_1.jpg"
        />
        <HomeAProducts
          id="869654"
          title="fridge"
          price={1545}
          imageUrl="https://skygarden.azureedge.net/media/images/products/2018/10/product_image_505958e0-8044-4c53-91c0-efb8b3ea3ef7.jpg"
        />
        <HomeAProducts
          id="23894"
          title="Table"
          price={445}
          imageUrl="https://w7.pngwing.com/pngs/872/19/png-transparent-brown-wooden-kitchen-cabinet-table-furniture-kitchen-room-wood-stove-angle-drawer-home-appliance.png"
        />
        <HomeAProducts
          id="9387"
          title="kettle"
          price={3345}
          imageUrl="https://i.roamcdn.net/hz/pi/listing-thumb-543w/276b7dcf10d9fbac49be71b5dc36c85f/-/horizon-files-prod/pi/picture/qk6jezm/e35558d83b99bf99e7a973767959e218be90566d.jpeg"
        />
      </div>
    </div>
  );
}

export default HomeAppliance;
