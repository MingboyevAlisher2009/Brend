import { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsletter mt-12">
        <div className="newsletter-card border-2 bg-gray200 py-10 flex flex-col justify-center items-center rounded-lg">
          <div className="newsletter-card-title text-center">
            <h1 className="text-3xl font-medium">
              Subscribe to our newsletter
            </h1>
            <div className="newsletter-card-subtitle">
              <p className="text-lg text-gray500 mt-3">
                Get daily news on upcoming offers from many suppliers all over
                the world
              </p>
            </div>
          </div>
          <div className="newsletter-card-form flex mt-5">
            <div
              className="input w-80 outline-none p-2 text-base font-medium rounded-lg border-2"
              class="inputbox"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input
                className="input w-80 outline-none p-2 text-base font-medium rounded-lg border-2"
                type="Email"
                required
              />
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/1000/8B96A5/new-post.png"
                  alt="new-post"
                />
                <p className="mt-[3px]">Email</p>
              </span>
            </div>
            <div className="newsletter-card-button">
              <button className="bg-primary1 ml-2 outline-none text-white py-2 px-5 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
