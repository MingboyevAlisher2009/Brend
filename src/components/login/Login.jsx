import { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import image from "../../img/image 102.png";

class Register extends Component {
  render() {
    return (
      <div className="bg-gray100">
        <Navbar />
        <div className="login my-20 px-16">
          <div className="login-card bg-white flex border-2 rounded-xl">
            <div className="login-card-img w-2/4">
              <img
                className="rounded-l-xl"
                style={{
                  width: "100%",
                  height: "90vh",
                  objectFit: "cover",
                  backgroundSize: "cover",
                }}
                src={image}
                alt=""
              />
            </div>
            <div className="login mx-auto text-center flex flex-col justify-center">
              <div className="login-title mb-20">
                <h1 className="text-3xl font-medium">Login</h1>
              </div>
              <div className="login-form">
                <form>
                  <input
                    type="text"
                    className="input w-full outline-none p-2 text-base font-medium rounded-lg border-2"
                  />
                  <input
                    type="password"
                    className="input w-full outline-none p-2 text-base font-medium rounded-lg border-2 mt-6"
                  />
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="w-full active:scale-95 duration-700 mt-6 bg-gradient text-white rounded-lg py-3 text-xl"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="line w-full h-[1px] mt-10 bg-gray500"></div>
              <div className="login-link flex mx-auto mt-10">
                <div className="google p-2 border-2 rounded-full cursor-pointer">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="google-logo"
                  />
                </div>
                <div className="facebook p-2 ml-5 border-2 rounded-full cursor-pointer">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook-new"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
