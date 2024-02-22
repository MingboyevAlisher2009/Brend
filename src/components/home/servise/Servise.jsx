const { Component } = require("react");

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="services mt-10">
        <div className="services-card border-2 bg-white rounded-lg">
          <div className="services-card-img">
            <img
              width={"324"}
              className="rounded-t-lg"
              src={this.props.servicesImg}
              alt=""
            />
          </div>
          <div className="services-card-icon inline-block bg-D1E7FF rounded-full p-3 border-4 border-white -mt-7 ml-60">
            <img
              className='mx-auto'
              width="30"
              height="30"
              src={this.props.servicesIcon}
              alt="search--v1"
            />
          </div>
          <div className="services-card-text m-2 ">
            <div className="services-card-title">
              <h1 className="text-base font-medium  ">
                {this.props.servicesTitle}
              </h1>
              <div className="services-card-subtitle">
                <h1 className="text-base font-medium  ">
                  {this.props.servicesSubtitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
