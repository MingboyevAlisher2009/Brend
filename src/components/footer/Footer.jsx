import { Component } from "react";
import navbarLogo from "../../img/logo-symbol.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="from-brand flex mt-16 px-16">
          <div className="brand_info">
            <div className="brand-logo">
              <img className="inline-block mb-3" src={navbarLogo} alt="" />
              <span className="inline-block text-3xl font-bold text-primary">
                Brand
              </span>
            </div>
            <div className="brand-text mt-2">
              <p className="text-gray500 text-lg w-80">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
            </div>
            <div className="brand-info flex">
              <div className="brand-facebook bg-gray500 rounded-full w-11 h-11 ml-2 my-3">
                <img
                  className="mx-auto mt-[7px]"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-rounded/2304/ffffff/facebook-f--v1.png"
                  alt="facebook-f--v1"
                />
              </div>
              <div className="brand-twitter w-11 h-11 ml-2 my-3 bg-gray500 rounded-full">
                <img
                  className="mx-auto mt-[7px]"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"
                  alt="twitter--v1"
                />
              </div>
              <div className="brand-in w-11 h-11 ml-2 my-3 bg-gray500 rounded-full">
                <h1 className="text-white text-4xl ml-[7px]">in</h1>
              </div>
              <div className="brand-instagram w-11 h-11 ml-2 my-3 bg-gray500 rounded-full">
                <img
                  className="mx-auto mt-[7px]"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/windows/23456/ffffff/instagram.png"
                  alt="instagram"
                />
              </div>
              <div className="brand-youtube w-11 h-11 ml-2 my-3 bg-gray500 rounded-full">
                <img
                  className="mx-auto mt-[7px]"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/30390/ffffff/youtube-play--v1.png"
                  alt="youtube-play--v1"
                />
              </div>
            </div>
          </div>
          <div className="brand-info flex ml-32">
            <div className="about">
              <div className="about-title text-xl font-bold">
                <h1>About</h1>
              </div>
              <div className="about-link text-gray500 text-lg mt-3">
                <p className="mt-1">About us</p>
                <p className="mt-1">Find store</p>
                <p className="mt-1">Categories</p>
                <p className="mt-1">Blogs</p>
              </div>
            </div>
          </div>
          <div className="brand-info flex ml-16">
            <div className="about">
              <div className="about-title text-xl font-bold">
                <h1>Partnership</h1>
              </div>
              <div className="about-link text-gray500 text-lg mt-3">
                <p className="mt-1">About us</p>
                <p className="mt-1">Find store</p>
                <p className="mt-1">Categories</p>
                <p className="mt-1">Blogs</p>
              </div>
            </div>
          </div>
          <div className="brand-info flex ml-16">
            <div className="about">
              <div className="about-title text-xl font-bold">
                <h1>Information</h1>
              </div>
              <div className="about-link text-gray500 text-lg mt-3">
                <p className="mt-1">Help Center</p>
                <p className="mt-1">Money Refund</p>
                <p className="mt-1">Shipping</p>
                <p className="mt-1">Contact us</p>
              </div>
            </div>
          </div>
          <div className="brand-info flex ml-16">
            <div className="about">
              <div className="about-title text-xl font-bold">
                <h1>For users</h1>
              </div>
              <div className="about-link text-gray500 text-lg mt-3">
                <p className="mt-1">Login</p>
                <p className="mt-1">Register</p>
                <p className="mt-1">Settings</p>
                <p className="mt-1">My Orders</p>
              </div>
            </div>
          </div>
          <div className="brand-download ml-28">
            <div className="download-title text-xl font-bold">
              <h1>Get app</h1>
            </div>
            <div className="download-app flex bg-black rounded-xl py-2 px-2 pr-7 mt-5 justify-evenly">
              <div className="download-img">
                <img
                  width="65"
                  height="65"
                  src="https://img.icons8.com/sf-black/65/ffffff/mac-os.png"
                  alt="mac-os"
                />
              </div>
              <div className="download-text text-white">
                <div className="download-title">
                  <h1>Download on the</h1>
                  <div className="download-subtitle">
                    <h1 className="text-3xl">App Store</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="download-app flex bg-black rounded-xl py-2 px-2 pr-7 mt-5 justify-evenly">
              <div className="download-img">
                <img
                  className="mt-4"
                  width="45"
                  height="45"
                  src="https://img.icons8.com/ios-filled/567/ffffff/google-play.png"
                  alt="google-play"
                />
              </div>
              <div className="download-text text-white">
                <div className="download-title">
                  <h1>Download on the</h1>
                  <div className="download-subtitle">
                    <h1 className="text-3xl">App Store</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex justify-between items-center bg-gray200 mt-5 py-5 px-20">
          <div className="copyright">
            <p className="text-xl text-gray500">© 2023 Ecommerce. </p>
          </div>
          <div className="select text-gray500 flex text-lg">
            <div className="select-img">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/usa.png"
                alt="usa"
              />
            </div>
            <select className="bg-inherit">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
