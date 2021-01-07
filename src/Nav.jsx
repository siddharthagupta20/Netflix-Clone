import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  var req = require.context("./netflix user icons", false, /.*\.png$/);
  // req.keys().forEach(function (key) {
  //   console.log(req(key));
  // });
  //getting the keys from req

  function initializeUserIcon() {
    return req(req.keys()[0]).default;
  }

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="user-icon"
        src={`${initializeUserIcon()}`}
        alt="User Icon"
      />
    </div>
  );
}

export default Nav;
