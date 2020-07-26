import React, { useState, useEffect } from "react";
import "./Nav.css";
/*https://upload.wikimedia.org/wikipedia/commons/0/0f/*/
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
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__image"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
