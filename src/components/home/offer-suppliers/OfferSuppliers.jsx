import { Component } from "react";
import "./offer.css";

class OfferSuppliers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="for-home-offer-suppliers rounded-xl mt-10 px-16 ">
        <div className="for-home-offer bg-hero-pattern bg-no-repeat	bg-cover h-full p-10 flex justify-between rounded-lg">
          <div className="for-home-offer-suppliers-text">
            <h1 className="text-3xl font-bold w-96 text-white">
              An easy way to send requests to all suppliers
            </h1>
            <p className="text-lg m-5 w-4/6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="offer-suppliers p-5 bg-white rounded-lg">
            <div className="offer-suppliers">
              <div className="offer-suppliers-title">
                <h1 className="text-3xl font-semibold">
                  Send quote to suppliers
                </h1>
              </div>
              <div className="offer-suppliers-requests">
                <div className="item-input">
                  <input
                    className="input mt-5 w-[35rem] outline-none border-2 rounded-md px-2 py-1"
                    value={"What item you need?"}
                  />
                </div>
                <div className="item-textarea">
                  <textarea
                    className="textarea mt-5 w-[35rem] outline-none border-2 rounded-md p-2 text-lg"
                    cols="20"
                    rows="5"
                    placeholder="Type more details"
                  ></textarea>
                </div>
                <div className="item-select mt-5 flex">
                  <input
                    type="text"
                    value={"Quantity"}
                    className="input outline-none border-2 rounded-md px-2 py-1"
                  />
                  <select className="select outline-none pr-10 border-2 rounded-lg ml-5 px-2">
                    <option>Pcs</option>
                    <option>kg</option>
                    <option>ton</option>
                    <option>bag</option>
                  </select>
                </div>
                <div className="item-button mt-5">
                  <button className="py-2 px-8 bg-primary1 text-white rounded-lg">
                    Send inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferSuppliers;
