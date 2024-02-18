import { Component } from "react";

class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <div className="navbar-menu px-16 py-5 border-b-2">
          <ul className="flex flex-wrap">
            <li>
              <img
                className="inline-block"
                width="22"
                height="22"
                src="https://img.icons8.com/ios/100/menu--v1.png"
                alt="menu--v1"
              />
              <span className="ml-2 font-bold text-base"> All category</span>
            </li>
            <li className="ml-6 font-bold text-base">Hot offers</li>
            <li className="ml-6 font-bold text-base">Gift boxes</li>
            <li className="ml-6 font-bold text-base">Projects</li>
            <li className="ml-6 font-bold text-base">Menu item</li>
            <li className="ml-6 font-bold text-base">
              <select className="outline-none">
                <option selected>Help</option>
                <option value="1">One</option>
              </select>
            </li>
            <li className='ms-auto'>
              <select className="outline-none font-medium">
                <option selected>English, USD</option>
              </select>
            </li>
            <li className='ml-6'>
              <select className="outline-none font-medium">
                <option className="custom-option">Ship to</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarMenu;
