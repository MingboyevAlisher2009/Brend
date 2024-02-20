import { Component } from "react";
import BannerBoard from "../../../img/Banner-board-800x420 2.png";
import photo from "../../../img/photo.png";
import { Link } from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (
      <div className="px-16 mt-4 ">
        <div className="home-page bg-white flex flex-wrap justify-between p-3 border-2 rounded-xl">
          <ul>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Automobiles
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Clothes and wear
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Home interiors
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Computer and tech
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Tools, equipments
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Sports and outdoor
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Animal and pets
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              Machinery tools
            </li>
            <li className="py-3 text-lg px-3 pr-28 cursor-pointer active:scale-95 hover:bg-slate-200 mt-2 rounded-lg">
              More category
            </li>
          </ul>
          <div className="home-page-img ml-4">
            <div className="home-page-img-text absolute m-10">
              <h1 className="text-3xl text-black">Latest trending</h1>
              <h1 className="text-4xl font-bold mt-1">Electronic items</h1>
              <button className="px-10 py-2 mt-5 bg-white rounded-md text-black">
                Learn more
              </button>
            </div>
            <img
              style={{ width: "780px" }}
              className="h-full bg-cover"
              src={BannerBoard}
              alt="Rectangle-6"
            />
          </div>
          <div className="home-page-register ml-3">
            <div className="register-card bg-primary rounded-xl p-5">
              <div className="register-card-user flex ">
                <span className="rounded-full bg-slate-200 w-16 h-16">
                  <img
                    className="mx-auto mt-2"
                    width="47"
                    src={photo}
                    alt="guest-male--v1"
                  />
                </span>
                <h1 className="text-2xl ml-3 m-0">
                  Hi, user <br />
                  let’s get stated
                </h1>
              </div>
              <button className="w-full py-2 mt-5 bg-secondary rounded-md text-white">
                Join now
              </button>
              <Link to={"/login"}>
                <button className="w-full py-2 mt-4 bg-white text-secondary rounded-md">
                  Login
                </button>
              </Link>
            </div>
            <div className="register-discount bg-F38332 rounded-xl p-5 mt-6">
              <h1 className="text-2xl font-thin font-sans w-36 text-white">
                Get US $10 off with a new supplier
              </h1>
            </div>
            <div className="register-discount bg-yellow rounded-xl p-5 mt-6">
              <h1 className="text-2xl font-thin font-sans w-44 text-white">
                Send quotes with supplier preferences
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
