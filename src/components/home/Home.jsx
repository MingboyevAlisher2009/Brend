import { Component } from 'react'
import Navbar from '../navbar/Navbar'
import NavbarMenu from '../navbar/NavbarMenu';

class Home extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Navbar />
          <NavbarMenu/>
        </header>
      </>
    );
  }
}

export default Home