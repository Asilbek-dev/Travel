import React from "react";
import "../style/about.css";

import Slider from "infinite-react-carousel";

const images = [
    {
        image: "./images/picture1.png"
    },
    {
        image: "./images/picture2.png"
    },
    {
        image: "./images/picture3.png"
    },
    {
        image: "./images/image 30.png"
    },
    {
        image: "./images/image 31.png"
    },
]


export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 about_theme">
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
          <div className="col about_carousel mb-5">
            <div className="about_card">
                <p>
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                </p>
                <br />
                <p>Mike taylor</p>
                <p>Lahore, Pakistan</p>
            </div>
            <div className="about_card1">
                <p>
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                </p>
                <br />
                <p>Chris, Thomas</p>
                <p>CEO of Red Button</p>
            </div>
            <img src="./images/Image 5.png" alt="" />
          </div>
        </div>
        <div className="row my-5">
            <div className="col-12 d-flex justify-content-around">
                {images.map(({image}) => (
                    <div className="about_logo mt-5">
                        <img src= {image} alt="" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}
