import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faTimes,
  faEnvelope,
  faHome,
  faPenNib,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Qz</h1>
        <h1 style={{fontSize: "16px", position: "relative", textAlign: "center", bottom: "14px"}}>Verse</h1>
      </div>

      <div className="nav-links">
        <nav className="menu">
          <NavLink
            to="/"
            exact="true"
            className="home-link"
            activeclassname="active"
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>

          <NavLink
            to="/story"
            exact="true"
            className="story-link"
            activeclassname="active"
          >
            <FontAwesomeIcon icon={faPenNib} />
          </NavLink>

          <NavLink
            to="/about"
            exact="true"
            className="about-link"
            activeclassname="active"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>

          <NavLink
            to="/contact"
            exact="true"
            className="contact-link"
            activeclassname="active"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </nav>

        {/* Humburger */}
        <div onClick={handleClick} className="humburger">
          {!nav ? (
            <FontAwesomeIcon
              icon={faBarsStaggered}
              color="#061230"
              style={{ zIndex: "20", fontSize: "20px", cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              color="#061230"
              style={{ zIndex: "20", fontSize: "20px", cursor: "pointer" }}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <nav className={!nav ? "hide" : "mobile-menu"}>
          <div onClick={handleClick} className="humburger">
            {!nav ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                color="#000"
                style={{ zIndex: "20", fontSize: "24px", cursor: "pointer" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                color="#000"
                style={{ zIndex: "20", fontSize: "24px", cursor: "pointer" }}
              />
            )}
          </div>
          <ul>
            <li>
              <Link
                to="/"
                className="menu-nav nav-link-l"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/story"
                className="menu-nav nav-link-l"
                onClick={handleClick}
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="menu-nav nav-link-l"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="menu-nav nav-link-l"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="logo-menu">
            <h1>QzSeekerVerse</h1>
          </div>
        </nav>
      </div>
    </div>
  );
}
