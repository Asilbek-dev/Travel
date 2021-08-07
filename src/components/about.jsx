import React, { useState } from "react";
import "../style/about.css";

import Slider from "infinite-react-carousel";

const images = [
  {
    image: "./images/picture1.png",
  },
  {
    image: "./images/picture2.png",
  },
  {
    image: "./images/picture3.png",
  },
  {
    image: "./images/image 30.png",
  },
  {
    image: "./images/image 31.png",
  },
];

export default function About() {
  
  const [count, setcount] = useState(true)

  const handleClick = () => {
    setcount(!count);
  }

  return (
    <>
      <div className="container" id = "about">
        <div className="row">
          <div className="col-lg-6 col-12 about_theme">
            <p>testimonials</p>
            <Slider dots>
              <div>
                <p>what people say about us.</p>
              </div>
              <div>
                <p>what people say about us.</p>
              </div>
              <div>
                <p>what people say about us.</p>
              </div>
            </Slider>
          </div>
          <div className="col-lg-6 col-12 about_carousel mb-5">
            <div className= {count ? "about_card" : "carousel_card1 about_card"}>
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <br />
              <p>Mike taylor</p>
              <p>Lahore, Pakistan</p>
            </div>
            <div className= {count ? "about_card1" : "carousel_card2 about_card1"}>
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <br />
              <p>Chris, Thomas</p>
              <p>CEO of Red Button</p>
            </div>
            <div className="carousel_next_prev d-block">
              <div>
                <i className = {count ? "icon_color fas fa-angle-up" : "fas fa-angle-up"} onClick = {handleClick}></i>
              </div>
              <i className = {count ? "fas fa-angle-down mt-5" : "icon_color fas fa-angle-down mt-5"} onClick = {handleClick}></i>
            </div>
            <img src="./images/Image 5.png" alt="" />
          </div>
        </div>
        <div className="row my-5 ">
          <div className="col-12 about_logos d-flex flex-wrap justify-content-around">
            {images.map(({ image }) => (
              <div className="about_logo mt-5">
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
