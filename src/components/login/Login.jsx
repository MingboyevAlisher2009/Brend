import { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

class Register extends Component {

  render() {
    return (
      <>
        <div className="register bg-gray100">
        <Navbar />
          <h1>Register</h1>
          <Footer />
        </div>
      </>
    );
  }
}

export default Register;