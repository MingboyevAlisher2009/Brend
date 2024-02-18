import { Component } from "react";
import img from "../../../img/image 92.png";
import Cards from "./Cards";

class ForHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="for-home px-16 mt-10">
        <div className="for-home-card border-2 bg-white rounded-xl flex">
          <div className="for-home-card-img border-e-2">
            <div className="for-home-card-text absolute m-5">
              <h1 className="text-xl font-bold w-36">{this.props.text}</h1>
              <button className="mt-5 py-2 px-8 bg-white rounded-lg">Source now</button>
            </div>
            <img
              style={{ width: "520px", height: "100%" }}
              className="rounded-s-lg"
              src={this.props.img}
            />
          </div>
          <div className="for-home-cards flex flex-wrap">
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image1}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image2}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image3}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image4}
              style={"for-home-card h-44 border-b-2 px-6 flex"}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image5}
              style={"for-home-card h-44 border-r-2 px-6 flex"}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image6}
              style={"for-home-card h-44 border-r-2 px-6 flex"}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image7}
              style={"for-home-card h-44 border-r-2 px-6 flex"}
            />
            <Cards
              title={"Soft chairs"}
              subtitle={"From"}
              money={"USD 19"}
              img={this.props.image8}
              style={"for-home-card h-44 px-6 flex"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ForHome;
