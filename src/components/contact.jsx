import React from "react";
import "../style/contact.css";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function Contact() {
  return (
    <>
      <div className="container" id = "contact">
        <div
          className="contact"
          style={{
            background: "url('./images/Mask Group (1).png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </p>
          <br />
          <br />
          <div className="d-lg-flex d-block  justify-content-center align-items-center">
            <Input
              className="contact_input"
              placeholder="Your email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
            <div className="contact_btn">Subscribe</div>
          </div>
          <img src="./images/Mask Group (2).png" alt="" />
          <img src="./images/Group 5.png" alt="" />
          <div className="contact_messanger">
            <i>
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.6105 12.9904C38.3018 14.1878 38.2092 15.6136 37.3677 16.711L18.8939 40.8182C18.1321 41.8123 16.8776 42.3191 15.5948 42.0729C14.3387 41.8313 13.3427 40.9156 12.997 39.6841L10.2635 29.9555L9.97886 28.9435L9.24487 28.191L2.18643 20.9595C1.29269 20.0444 0.9977 18.724 1.41656 17.5154C1.83111 16.3206 2.87082 15.4536 4.15272 15.2856L34.267 11.3404C35.6381 11.1604 36.9192 11.793 37.6105 12.9904Z"
                  fill="white"
                />
                <path
                  d="M10.2636 29.9555L12.997 39.6841C13.3427 40.9157 14.3386 41.8313 15.5948 42.0729C16.8776 42.3192 18.1321 41.8124 18.8939 40.8182L37.3677 16.7111C38.2092 15.6137 38.3018 14.1879 37.6105 12.9905L9.97889 28.9436L10.2636 29.9555Z"
                  fill="white"
                />
                <path
                  d="M21.2231 22.4515C21.5043 22.9385 21.3379 23.5616 20.8503 23.8431L10.2636 29.9553L9.97887 28.9434L9.24487 28.1909L19.8316 22.0787C20.3192 21.7973 20.942 21.9646 21.2231 22.4515Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M10.2637 29.9554L20.8504 23.8432C21.338 23.5617 21.5045 22.9387 21.2233 22.4517L9.97905 28.9435L10.2637 29.9554Z"
                  fill="url(#paint1_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="17.4077"
                    y1="23.5441"
                    x2="18.5452"
                    y2="25.8251"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#747DEF" />
                    <stop offset="1" stop-color="#5E3BE1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="17.9029"
                    y1="24.4017"
                    x2="18.507"
                    y2="25.5259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#747DEF" />
                    <stop offset="1" stop-color="#5E3BE1" />
                  </linearGradient>
                </defs>
              </svg>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
