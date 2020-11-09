import React from "react";
import "./ClothesPage.style.css";
import "./ClothesProduct";
import ClothesProduct from "./ClothesProduct";

function ClothesPage() {
  return (
    <div className="clothes">
      <h4>Mens</h4>
      <div className="clothes-row">
        <ClothesProduct
          id="3892"
          title="Shirt"
          price={34.56}
          imageUrl="https://image.kilimall.com/kenya/shop/store/goods/2157/2018/09/2157_05913121283191806_720.jpg"
        />
        <ClothesProduct
          id="8899"
          title="Coat"
          price={34.56}
          imageUrl="https://image.kilimall.com/kenya/shop/store/goods/964/2020/08/964_06522014646992526_360.jpg.webp
          "
        />
        <ClothesProduct
          id="11111"
          title="Mens"
          price={34.56}
          imageUrl="https://www.ndoleta.com/wp-content/uploads/2020/02/Large-Size-Men-s-Casual-Plaid-Shirt-2.png"
        />
        <ClothesProduct
          id="7765"
          title="Coat"
          price={34.56}
          imageUrl="https://image.made-in-china.com/2f0j00usoQbpkhqUGP/Single-Breasted-One-Button-Men-Clothing-Jacket-New-Design-Casual-Jacket.jpg"
        />
        <ClothesProduct
          id="88883"
          title="Shirt"
          price={34.56}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsob-cFwCidzMI1afr_uGuAF30RglrNB2jvw&usqp=CAU"
        />
      </div>
      <h4>Womens</h4>
      <div className="clothes-row">
        <ClothesProduct
          id="00987"
          title="womens"
          price={34.56}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt9uE8POmtqrph_4DvrVT8D9KF8IQlvSddTQ&usqp=CAU"
        />
        <ClothesProduct
          id="65422"
          title="womens"
          price={21.45}
          imageUrl="https://www.ndoleta.com/wp-content/uploads/2018/11/2019-Women-s-Vintage-Floral-Lace-Boat.jpg"
        />
        <ClothesProduct
          id="654321"
          title="womens"
          price={90.0}
          imageUrl="https://www.hikoreanfashion.com/57640-thickbox_default/yellow-jersey-long-sleeved-open-ruffled-cardigans-womens-clothing.jpg"
        />
        <ClothesProduct
          id="6747"
          title="Casual"
          price={54.56}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMnUD7rtRG1fPRL07lEadKE1jYNtQquNrFxA&usqp=CAU"
        />
        <ClothesProduct
          id="55645"
          title="womens"
          price={78.9}
          imageUrl="https://www.ndoleta.com/wp-content/uploads/2018/11/Women-s-Long-Sleeve-T-Shirts-With.jpg"
        />
      </div>
      <h4>Sneakers</h4>
      <div className="clothes-row1">
        <ClothesProduct
          id="08789"
          title="sneakers"
          imageUrl="https://rukminim1.flixcart.com/image/714/857/k34rki80/shoe/x/f/n/shn501-7-aadil-white-original-imafmbnxv9edgtz9.jpeg?q=50"
          price={23.45}
        />
        <ClothesProduct
          id="52178"
          title="sneakers"
          imageUrl="https://www.chanel.com/images//t_fashion//q_auto,f_jpg,fl_lossy,dpr_2/w_1920/sneakers-dark-gray-gray-fabric-suede-calfskin-fabric-suede-calfskin-packshot-alternative-g34360y54059k2052-8824118345758.jpg"
          price={56.76}
        />
        <ClothesProduct
          id="92435"
          title="sneakers"
          imageUrl="https://media4.s-nbcnews.com/i/newscms/2020_21/3353886/200518-air-jordan-mc-952_36259294c1529294d809ae88aab1390a.JPG"
          price={89}
        />
        <ClothesProduct
          id="09333"
          title="sneakers"
          imageUrl="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/83/388841/1.jpg?8433"
          price={22}
        />
        <ClothesProduct
          id="89418"
          title="sneakers"
          imageUrl="https://sourcingjournal.com/wp-content/uploads/2019/12/2019yearinsneakers.jpg"
          price={68.5}
        />
      </div>
    </div>
  );
}

export default ClothesPage;
