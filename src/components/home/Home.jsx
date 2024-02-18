import { Component } from "react";
import Navbar from "../navbar/Navbar";
import HomePage from "./home-page/HomePage";
import DiscountCard from "./discount/DiscountCard";
import ForHome from "./forHome/ForHome";

// images
import img from "../../img/image 92.png";
import img2 from "../../img/image 98.png";

import image1 from "../../img/rasm.png";
import image2 from "../../img/image 94.png";
import image3 from "../../img/image 93.png";
import image4 from "../../img/image 90.png";
import image5 from "../../img/image 88.png";
import image6 from "../../img/image 87.png";
import image7 from "../../img/rasm1.png";
import image8 from "../../img/image 89.png";

// imaged 2
import image9 from "../../img/8.png";
import image10 from "../../img/image 28.png";
import image11 from "../../img/image 86.png";
import image12 from "../../img/image 85.png";
import image13 from "../../img/image 29.png";
import image14 from "../../img/image 34.png";
import image15 from "../../img/image 32.png";
import image16 from "../../img/image 33.png";
import OfferSuppliers from './offer-suppliers/OfferSuppliers';
import RecommendedItems from './recommended-tems/RecommendedItems';

// images 3
import imgItem from "../../img/Bitmap.png";
import imgItem2 from "../../img/2 1.png";
import imgItem3 from "../../img/image 30.png";
import imgItem4 from "../../img/image 24.png";
import imgItem5 from "../../img/image 26.png";
import imgItem6 from "../../img/Bitmap2.png";
import imgItem7 from "../../img/image 86.png";
import imgItem8 from "../../img/image 90.png";
import imgItem9 from "../../img/image 85.png";

class Home extends Component {
  render() {
    return (
      <div className="bg-gray100">
        <header className="header">
          <Navbar />
          <HomePage />
        </header>
        <section>
          <DiscountCard />
          <ForHome
            text="Home and outdoor"
            img={img}
            image1={image1}
            image2={image2}
            image3={image3}
            image4={image4}
            image5={image5}
            image6={image6}
            image7={image7}
            image8={image8}
          />
          <ForHome
            text="Consumer electronics and gadgets"
            img={img2}
            image1={image9}
            image2={image10}
            style={"for-home-card h-44 border-r-2 border-b-2 px-6 m-0 flex"}
            image3={image11}
            image4={image12}
            image5={image13}
            image6={image14}
            image7={image15}
            image8={image16}
          />
          <OfferSuppliers />
          <h1 className="text-3xl font-bold mt-5 ml-16 ">Recommended items</h1>
          <div className="for-home flex justify-evenly flex-wrap  px-14 p-0 m-0">
            <RecommendedItems
              img={imgItem}
              money={"$10.30"}
              description={"T-shirts with multiple colors, for men"}
            />
            <RecommendedItems
              img={imgItem2}
              money={"$10.30"}
              description={"Jeans shorts for men blue color"}
            />
            <RecommendedItems
              img={imgItem3}
              money={"$12.50"}
              description={"Brown winter coat edium size"}
            />{" "}
            <RecommendedItems
              img={imgItem4}
              money={"$34.00"}
              description={"Jeans bag for travel for men"}
            />
            <RecommendedItems
              img={imgItem5}
              money={"$99.00"}
              description={"Leather wallet"}
            />
            <RecommendedItems
              img={imgItem6}
              money={"$9.99"}
              description={"Canon camera black, 100x zoom"}
            />
            <RecommendedItems
              img={imgItem7}
              money={"$8.99"}
              description={"Headset for gaming with mic"}
            />
            <RecommendedItems
              img={imgItem5}
              money={"$10.30"}
              description={"Smartwatch silver color modern"}
            />{" "}
            <RecommendedItems
              img={imgItem8}
              money={"$10.30"}
              description={"Blue wallet for men leather metarfial"}
            />
            <RecommendedItems
              img={imgItem9}
              money={"$80.95"}
              description={"Jeans bag for travel for men"}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
