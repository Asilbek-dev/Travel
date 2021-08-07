import React from "react";
import "../style/service.css";

const card = [
  {
    image: "./images/Group 48.png",
    title: "Calculated",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: "./images/Group 49.png",
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: "./images/Group 50.png",
    title: "Local Events",
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    image: "./images/Group 49.png",
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
  },
];

export default function Service() {
  return (
    <>
      <div className="container mt-5" id = "service">
        <div className="row">
          <div className="col-12 service_theme">
            <p>Category</p>
            <p>we offer best services</p>
            <img src="./images/Group.png" alt="" />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-5 ">
          {card.map(({ image, title, text }) => (
            <div
              className="col-lg-3 col-md-6 col-12 mt-lg-5 text-center service_card"
              key={title}
            >
                <img src={image} alt="" />
                <p>{title}</p>
                <p>{text}</p>
                <img src="./images/Rectangle 157.png" alt="" />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
