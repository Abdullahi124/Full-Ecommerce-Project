import React from "react";
import PhonesProduct from "./PhonesProduct";
import "./Phones.style.css";

function Phones() {
  return (
    <div className="phones">
      <h4>Iphone</h4>
      <div className="phone-row">
        <PhonesProduct
          id="64738"
          title="Iphone 11"
          price={334.56}
          imageUrl="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956148115"
        />
        <PhonesProduct
          id="3467"
          title="Iphone 8"
          price={234.56}
          imageUrl="https://i.roamcdn.net/hz/pi/listing-gallery-full-1920w/47b8bface06b26321eb7245b270161d1/-/horizon-files-prod/pi/picture/qwpjn56/6c94913c1dd90bb6745845c262148d0aaa257b8c.jpeg"
        />
        <PhonesProduct
          id="22234"
          title="Iphone 12"
          price={734.56}
          imageUrl="https://specials-images.forbesimg.com/imageserve/5eadf501522fe20007574e0d/960x0.jpg?fit=scale"
        />
        <PhonesProduct
          id="8865"
          title="Iphone 6"
          price={434.56}
          imageUrl="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_teaser_05.jpg"
        />
        <PhonesProduct
          id="11223"
          title="Iphone 7"
          price={134.56}
          imageUrl="https://www.bsetechnology.com/wp-content/uploads/2019/01/iphone-7p-red.jpg"
        />
      </div>
      <h4>Android</h4>
      <div className="phone-row">
        <PhonesProduct
          id="37392"
          title="oppo"
          price={334.56}
          imageUrl="https://phonesstorekenya.com/wp-content/uploads/2020/06/Oppo-A52.jpg"
        />
        <PhonesProduct
          id="24773"
          title="Nokia"
          price={321.45}
          imageUrl="https://www.gizmochina.com/wp-content/uploads/2019/04/Nokia-6.2-1.jpg"
        />
        <PhonesProduct
          id="12568"
          title="Tecno"
          price={890.0}
          imageUrl="https://www.gadgetsnow.com/photo/70894825/Tecno-Spark-4-Air.jpg"
        />
        <PhonesProduct
          id="53688"
          title="samsung"
          price={654.56}
          imageUrl="https://images.samsung.com/is/image/samsung/in-galaxy-s20-plus-sm-g985-sm-g985fzpdinu-frontbpurple-thumb-261486036"
        />
        <PhonesProduct
          id="4587"
          title="huwawei"
          price={678.9}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/61ichz%2BYnFL._AC_SX466_.jpg"
        />
      </div>
      <h4>Tablets and Ipads</h4>
      <div className="phone-row1">
        <PhonesProduct
          id="78373"
          title="ipad"
          imageUrl="https://crdms.images.consumerreports.org/c_lfill,w_598/prod/products/cr/models/400864-9-inch-screen-and-larger-tablets-mobile-data-wifi-apple-ipad-pro-11-128gb-2020-10012011.png"
          price={123.45}
        />
        <PhonesProduct
          id="9810"
          title="tablet"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw2t8kx7wLv93O4__8c2SMMnUMoGPA05EJ9w&usqp=CAU"
          price={456.76}
        />
        <PhonesProduct
          id="0086"
          title="ipad pro"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRScQyKmCOcLlkZwjOXqyd2ZXJAAtspugF4A&usqp=CAU"
          price={889}
        />
        <PhonesProduct
          id="8864"
          title="tablet pro"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/61vUiHar9rL._AC._SR360,460.jpg"
          price={222}
        />
        <PhonesProduct
          id="33453"
          title="Ipad"
          imageUrl="https://www.staticwhich.co.uk/media/images/trusted-trader/desktop-main/ipad-2018-476605.jpg"
          price={568.5}
        />
      </div>
    </div>
  );
}

export default Phones;
