import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="row">
          <div className="col-md-4 col-sm-6 header-logo">
            <h5>FIFISOFT</h5>
          </div>
          <div className="col-md-8 col-sm-6 ">
            <ul className="header-nav">
              <li>Home</li>
              <li>FreeLancer</li>
              <li>Services</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
