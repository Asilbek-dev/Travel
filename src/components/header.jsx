import React, { useState } from "react";
import "../style/header.css";

const menus = [
  {
    title: "Desitnations",
  },
  {
    title: "Hotels",
  },
  {
    title: "Flights",
  },
  {
    title: "Bookings",
  },
  {
    title: "Login",
  },
];

export default function Header() {

  const [count, setcount] = useState(false);
  const buttonClick = () => {
    setcount(!count);
  };

  return (
    <>
      <div className="container py-5" id = "header">
        <div className="nav align-items-center justify-content-between">
          <div>
            <img src="./images/Logo.png" alt="" />
          </div>
          <ul className= {count ? "nav navbar nav2" : "nav navbar nav1"}>
            {menus.map(({ title }) => (
              <li className="nav-item" key={title}>
                {title}
              </li>
            ))}
            <li className="nav-item">
              <button>Sign up</button>
            </li>
            <li className="nav-item ">
              <select className="bg-none">
                <option value="en">EN</option>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>
          <div className = "d-lg-none">
            <i className = {count ? "fas fa-times " : "fas fa-bars "} onClick = {buttonClick}></i>
          </div>
        </div>
        <div className="background_image">
          <img src="./images/Decore.png" alt="" />
        </div>
        <div className="d-flex mt-lg-4 justify-content-between">
          <div className="col-6 header_text mt-lg-5">
            <p>Best Destinations around the world</p>
            <p>Travel, enjoy and live a new and full life</p>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="d-lg-flex d-block align-items-center">
              <div className="btn text-center text-light">Find out more</div>
              <div className = "header_play">
                <div className="btn_cricle">
                  <i>
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </div>
                <span>Play Demo</span>
              </div>
            </div>
          </div>
          <div className="col header_image">
            <img src="./images/Image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
