import { Component } from "react";

// img
import img1 from "../../../img/8.png";
import img2 from "../../../img/image 34.png";
import img3 from "../../../img/image 28.png";
import img4 from "../../../img/image 29.png";
import img5 from "../../../img/image 23.png";

class DiscountCard extends Component {
  render() {
    return (
      <div className="discount px-16 mt-10">
        <div className="discount-cards bg-white flex flex-wrap justify-between border-2 rounded-xl pl-5 h-80">
          <div className="discount-time p-5 flex flex-col border-r-2">
            <div className="discount-time-title">
              <h1 className="text-3xl font-bold">Deals and offers</h1>
              <h1 className="text-2xl font-semibold mt-1 text-gray500">
                Hygiene equipments
              </h1>
            </div>
            <div className="discount-time-cards flex mt-5 py-2">
              <div className="discount-time-card bg-gray60 w-16 py-2 text-white text-center rounded-lg">
                <h1 className="text-2xl font-bold">04</h1>
                <p className="text-2xl">Days</p>
              </div>
              <div className="discount-time-card ml-5 bg-gray60 w-16 py-2 text-white text-center rounded-lg">
                <h1 className="text-2xl font-bold">13</h1>
                <p className="text-2xl">Hour</p>
              </div>
              <div className="discount-time-card ml-5 bg-gray60 w-16 py-2 text-white text-center rounded-lg">
                <h1 className="text-2xl font-bold">34</h1>
                <p className="text-2xl">Min</p>
              </div>
              <div className="discount-time-card ml-5 bg-gray60 w-16 py-2 text-white text-center rounded-lg">
                <h1 className="text-2xl font-bold">54</h1>
                <p className="text-2xl">Sec</p>
              </div>
            </div>
          </div>
          <div className="discount-card border-r-2 w-48 flex flex-col items-center justify-center py-3">
            <img width={"170"} className="discount-card-img" src={img1} />
            <div className="discount-card-title flex flex-col justify-end h-full">
              <h1 className="text-2xl font-normal">Smart watches</h1>
              <div className="discount-card-subtitle mx-auto bg-red rounded-3xl p-2 w-20 text-center mt-3">
                <h1 className="text-xl font-bold text-red ">-25%</h1>
              </div>
            </div>
          </div>
          <div className="discount-card border-r-2 w-48 flex flex-col items-center py-3">
            <img width={"170"} className="discount-card-img mt-5" src={img2} />
            <div className="discount-card-title flex flex-col justify-end h-full">
              <h1 className="text-2xl font-normal">Smart watches</h1>
              <div className="discount-card-subtitle mx-auto bg-red rounded-3xl p-2 w-20 text-center mt-3">
                <h1 className="text-xl font-bold text-red ">-15%</h1>
              </div>
            </div>
          </div>
          <div className="discount-card border-r-2 w-48 flex flex-col items-center py-3">
            <img width={"170"} className="discount-card-img mt-5" src={img3} />
            <div className="discount-card-title flex flex-col justify-end h-full">
              <h1 className="text-2xl font-normal">Smart watches</h1>
              <div className="discount-card-subtitle mx-auto bg-red rounded-3xl p-2 w-20 text-center mt-3">
                <h1 className="text-xl font-bold text-red ">-40%</h1>
              </div>
            </div>
          </div>
          <div className="discount-card border-r-2 w-48 flex flex-col items-center py-3">
            <img width={"130"} className="discount-card-img mt-2" src={img4} />
            <div className="discount-card-title flex flex-col justify-end h-full">
              <h1 className="text-2xl font-normal">Smart watches</h1>
              <div className="discount-card-subtitle mx-auto bg-red rounded-3xl p-2 w-20 text-center mt-3">
                <h1 className="text-xl font-bold text-red ">-25%</h1>
              </div>
            </div>
          </div>
          <div className="discount-card w-48 flex flex-col items-center py-3">
            <img width={"130"} className="discount-card-img mt-3" src={img5} />
            <div className="discount-card-title flex flex-col justify-end h-full">
              <h1 className="text-2xl font-normal">Smart watches</h1>
              <div className="discount-card-subtitle mx-auto bg-red rounded-3xl p-2 w-20 text-center mt-3">
                <h1 className="text-xl font-bold text-red ">-25%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscountCard;
