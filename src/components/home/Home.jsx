import { Component } from 'react'
import Navbar from '../navbar/Navbar'
import HomePage from './home-page/HomePage';

class Home extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Navbar />
          <HomePage/>
        </header>
      </>
    );
  }
}

export default Home