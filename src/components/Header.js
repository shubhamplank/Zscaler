import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [flag, setFlag] = useState(false);
  return (
    <Fragment>
      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="logo">
              <img src={require("../assets/images/site-logo.png")} alt="" />
            </div>
            <div className="call">
              <p>
                Call <a href="tel:713-221-8522">713-221-8522</a> to speak to an
                Admissions Counselor or complete the form below to learn more!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav_bar">
        <div className="container">
          <button className="nav_hamburger" onClick={() => setFlag(!flag)}>
            Ham
          </button>

          <div className="nav_menu">
            <a href="#">Home</a>
            <Link to="/degrees"> Degrees</Link>
            <div className="dropdown_btn">
              <a className="dropdown" href="#">
                degree programs{" "}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
              <ul className="dropdown_nav">
                <li>
                  <a href="#0">dropdown1</a>
                </li>
                <li>
                  <a href="#0">dropdown2</a>
                </li>
                <li>
                  <a href="#0">dropdown2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
