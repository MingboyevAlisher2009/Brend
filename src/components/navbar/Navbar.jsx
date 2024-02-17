import { Component } from "react";

// img
import navbarLogo from "../../img/logo-symbol.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar flex border-y-2 py-4 px-16">
          <div className="navbar-logo inline-block  cursor-pointer">
            <img className="inline-block mb-3" src={navbarLogo} alt="" />
            <span className="inline-block text-3xl font-bold text-primary">
              Brand
            </span>
          </div>
          <div
            style={{
              height: "2.65rem",
              border: "2px solid #0d6dfcff",
            }}
            className="navbar-search mx-auto cursor-pointer	 rounded-md border-borderStyle"
          >
            <input
              className="px-2 w-96 py-1 rounded outline-none	inline-block"
              type="search"
              placeholder="Search"
            />
            <select className="p-1  border-s-2 border-secondary outline-none	">
              <option selected>All category</option>
            </select>
            <button className="px-6 py-2 bg-primary rounded-e-sm text-white">
              Search
            </button>
          </div>
          <div className="items	 flex justify-between">
            <div className="item cursor-pointer	 ml-6 text-center">
              <img
                className="mx-auto"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/757575/user--v1.png"
                alt="user--v1"
              />
              <p className="text-[#757575] ">Profile</p>
            </div>
            <div className="item cursor-pointer	 ml-6 text-center">
              <img
                className="mx-auto"
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/30/757575/filled-speech-bubble-with-dots.png"
                alt="filled-speech-bubble-with-dots"
              />
              <p className="text-[#757575] ">Message</p>
            </div>
            <div className="item cursor-pointer	 ml-5">
              <img
                className="mx-auto"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/90/757575/filled-like.png"
                alt="filled-like"
              />
              <p className="text-[#757575] ">Orders</p>
            </div>
            <div className="item cursor-pointer	 ml-6 text-center">
              <img
                className="mx-auto"
                width="30"
                height="30"
                src="https://img.icons8.com/material-sharp/30/757575/shopping-cart.png"
                alt="shopping-cart"
              />
              <p className="text-center text-[#757575] ">My cart</p>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
