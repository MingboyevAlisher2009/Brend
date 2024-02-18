import { Component } from "react";

class Cards extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="for-home-card rounded-xl">
        <div className="for-home-cards bg-white">
          <div className={this.props.style ? this.props.style : 'for-home-card h-44 border-e-2 border-b-2 px-6 flex'}>
            <div className="for-home-card-title mt-5">
              <h1 className="text-xl font-normal">{this.props.title}</h1>
              <div className="from-home-card-subtitle mt-2">
                <h1 className='text-lg text-gray500'>{this.props.subtitle}</h1>
              </div>
              <div className="for-home-card-money">
                <h1 className='text-lg text-gray500'>{this.props.money}</h1>
              </div>
            </div>
            <div className="for-home-card-img ml-10 mt-12">
              <img width={'100'} src={this.props.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
