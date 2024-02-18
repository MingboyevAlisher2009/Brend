import { Component } from "react";

class RecommendedItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="recommended-items mt-10">
          <div className="recommended-item flex flex-col justify-evenly h-80 px-5 py-5 bg-white border-2 rounded-lg">
            <div className="recommended-item-img mx-auto">
              <img className="mx-auto" src={this.props.img} alt="" />
            </div>
            <div className="recommended-item-money mt-6">
              <h1 className="text-lg font-semibold">{this.props.money}</h1>
              <div className="recommended-item-description w-48 text-gray500">
                <h1>{this.props.description}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedItems;
