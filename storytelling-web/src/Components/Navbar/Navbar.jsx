import { Link } from "react-scroll";
import "./Navbar.scss";

import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>QzSeekerVerse.Com</h1>
      </div>

      <div className="nav-links">
        <Link to="hero">Home</Link>
        <Link to="story">Stories</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  )
}
