import React from "react";
import Product from "./Product";
import "./Products.css";
import strechfilm from "../images/strechfilm.jpg";
import strechfilm2 from "../images/strechfilm2.jpg";
import strechfilm3 from "../images/strechfilm3.jpg";
import balonlunaylon1 from "../images/balonlunaylon1.jpg";
import balonlunaylon2 from "../images/balonlunaylon2.jpg";
import balonlunaylon3 from "../images/balonlunaylon3.jpg";
import koli1 from "../images/koli1.jpg";
import koli2 from "../images/koli2.png";
import koli3 from "../images/koli3.jpg";

function Products() {
  return (
    <div id="products">
      <div className="container products-container">
        <h3 className="products-title">ÜRÜNLER</h3>
        <div className="products-list">
          <Product
            id={1}
            title={"Strech Film"}
            productInfo={
              "Streç film, Streç veya streç sargı, çeşitli maddelerin havayla olan etkileşimini ortadan kaldırmak amacıyla sarılmasında kullanılan şeffaf paketleme malzemesi ya da plastik üründür. Elastik özelliği sayesinde sıkıca sarıldığı ögeleri tutar. Buna karşılık ısı uygulandığında küçülür ve gevşer."
            }
            img1={strechfilm2}
            img2={strechfilm}
            img3={strechfilm3}
            direction={""}
            slide={"fade-left"}
          />
          <Product
            id={2}
            title={"Balonlu Naylon"}
            productInfo={
              "Kabarcık sargısı, kırılgan eşyaları ambalajlamak için kullanılan esnek bir şeffaf plastik malzemedir. Düzenli aralıklı, çıkıntılı hava dolu yarım küreler kırılgan eşyalar için yastıklama sağlar."
            }
            img1={balonlunaylon1}
            img2={balonlunaylon2}
            img3={balonlunaylon3}
            direction={"reversed"}
            slide={"fade-right"}
          />
          <Product
            id={3}
            title={"Baskılı Koli Bandı"}
            productInfo={
              "Logo, firma bilgileri vb. bilgilerin koli bantı üzerine basılmasıyla üretimi gerçekleşmektedir. Akrilik ve Hot Melt koli bantına baskı uygulanabilir. Firmalar için oldukça ekonomik ve fayda sağlayan bir reklam yöntemidir.Ürünlerimiz yeterli yapışkan gücüne sahiptir ve kendinden yapışkanlı bir kaplamaya sahiptir. Kutu, koli, zarf gibi standart ürünlerde hızlı ve kolay uygulama için hazırlanmıştır."
            }
            img1={koli1}
            img2={koli2}
            img3={koli3}
            direction={""}
            slide={"fade-left"}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
