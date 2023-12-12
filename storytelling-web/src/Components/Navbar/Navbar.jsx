import "./Navbar.scss";
import { Link } from "react-scroll";
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
        setNav(!nav)
    }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>QzSeekerVerse.Com</h1>
      </div>

      <div className="nav-links">
        <nav className="menu">
              <Link to="hero">
                <FontAwesomeIcon icon={faHome}/>
              </Link>

              <Link to="story">
                <FontAwesomeIcon icon={faPenNib} />
              </Link>

              <Link to="about">
                <FontAwesomeIcon icon={faEnvelope}/>
              </Link>

              <Link to="contact">
                <FontAwesomeIcon icon={faUser} />
              </Link>

        </nav>

        {/* Humburger */}
        <div onClick={handleClick} className="humburger">
            {!nav ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                color="#000"
                style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                color="#000"
                style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
              />
            )}
          </div>

        {/* Mobile Menu */}
        <nav className={!nav ? 'hide' : 'mobile-menu'}>
        <div onClick={handleClick} className="humburger">
            {!nav ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                color="#000"
                style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                color="#000"
                style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
              />
            )}
          </div>
          <ul>
            <li>
              <Link to="hero">Home</Link>
            </li>
            <li>
              <Link to="story">Stories</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
