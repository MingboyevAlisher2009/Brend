import { Component } from "react";

class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <div className="navbar-menu">
          <ul>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/100/menu--v1.png"
                alt="menu--v1"
              />
              All category
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarMenu;
