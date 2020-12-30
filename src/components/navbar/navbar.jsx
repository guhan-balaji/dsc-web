import React from "react";
// import logo from "../../assets/img/dsc_iiitk_logo_white.png";
import ham from "../../assets/img/hamburger.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import account from "../../assets/img/account1.svg";
// import Typist from "react-typist";
const Example = (props) => {
  var signedIn = true;
  function signedInorNot() {
    if (signedIn === true) {
      return (
        <div className="accountIcon ">
          <img className="accountImg" src={account} alt="default-account-profile"/>
        </div>
      );
    } else {
      return <div className="signin">SignIn</div>;
    }
  }

  function CollapseElement() {
    if (window.screen.width >= 899) {
      return (
        <div className="links-container ">
          <div className="link">Home</div>
          <div className="link">AboutUs</div>
          <div className="link">Events</div>
          <div className="link">Projects</div>
          <div className="link">Team</div>
          {signedInorNot()}
        </div>
      );
    } else {
      return (
        <div className="links-container">
          <img className="ham" src={ham} alt="hamburger-menu"/>
        </div>
      );
    }
  }

  return (
    <div className="navbar-container">
      <div className="image-container">

      </div>
      {CollapseElement()}
    </div>
  );
};

export default Example;
