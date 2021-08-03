import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="d-flex align-items-start justify-content-around">
          <div className="footer_logo">
            <p>Jadoo.</p>
            <p>Book your trip in minute, get full </p>
            <p>Control for much longer.</p>
          </div>
          <div className="footer_text">
            <p>Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div className="footer_text">
            <p>Contact</p>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </div>
          <div className="footer_text">
            <p>More</p>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
          <div className="footer_right mt-4">
            <div className="footer_messanger d-flex align-items-center">
              <div className="footer_cricle">
                <a href="#">
                  <i>
                    <svg
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                        fill="#080809"
                      />
                    </svg>
                  </i>
                </a>
              </div>
              <a href="#">
                <img src="./images/Social.png" alt="" />
              </a>
              <div className="footer_cricle">
                <a href="#">
                  <i>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                        fill="#080809"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            <p>Discover our app</p>
            <div className="d-flex mt-2">
              <a href="#" >
                <img src="./images/Google Play.png" alt="" />
              </a>
              <a href="#" className = "mx-2">
                <img src="./images/Play Store.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12 text-center mt-5 footer_bottom">
                <p>All rights reserved@jadoo.co</p>
            </div>
        </div>
      </div>
    </>
  );
}
