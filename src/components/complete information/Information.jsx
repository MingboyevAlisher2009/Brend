import { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import img from "../../img/image 34@2x.png";

class Information extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="px-16 my-10">
          <div className="information-card border-2 p-5 flex">
            <div className="information-card-img border-2 py-3">
              <img width={"400"} src={img} alt="" />
            </div>
            <div className="information-card-info ml-10">
              <div className="information-card-title">
                <h1 className="text-3xl font-bold ">
                  Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle
                </h1>
              </div>
              <div className="sharh flex">
                <div className="stars flex mt-5">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/20/star--v1.png"
                    alt="star--v1"
                  />

                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/20/star--v1.png"
                    alt="star--v1"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/20/star--v1.png"
                    alt="star--v1"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/20/star--v1.png"
                    alt="star--v1"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/20/star--v1.png"
                    alt="star--v1"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/EFF2F4/star--v1.png"
                    alt="star--v1"
                  />
                </div>
                <div className="mt-5 ml-5 flex text-yellow-400 ">
                  <h1>9.3</h1>
                  <div className="message flex text-gray500 ml-2 ">
                    <img
                      className="mx-2"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/8B96A5/comments--v1.png"
                      alt="comments--v1"
                    />
                    <span>32 reviews</span>
                    <div className="bag flex ml-2">
                      <img
                        className="mx-2"
                        width="24"
                        height="24"
                        src="https://img.icons8.com/material-outlined/24/8B96A5/shopping-basket.png"
                        alt="shopping-basket"
                      />
                      <h1>154 sold</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="money flex mt-5 bg-FFF0DF p-4 pr-10">
                <div className="money1 border-r-2 text-2xl font-bold pr-14 pl-5">
                  <h1 className="text-red">$ 200</h1>
                  <p className="text-gray500 text-lg mt-1 font-normal">
                    50-100pcs
                  </p>
                </div>
                <div className="money1 border-r-2 text-2xl font-bold pr-14 pl-5">
                  <h1>$ 200</h1>
                  <p className="text-gray500 text-lg mt-1 font-normal">
                    50-100pcs
                  </p>
                </div>
                <div className="money1 text-2xl font-bold pl-5">
                  <h1>$ 200</h1>
                  <p className="text-gray500 text-lg mt-1 font-normal">
                    50-100pcs
                  </p>
                </div>
              </div>
              <div className="mt-5 flex relative w-80 border-b-2 pb-2">
                <h1 className="text-lg text-gray500">Price:</h1>
                <p className='absolute right-0'>Negotiable</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Information;
