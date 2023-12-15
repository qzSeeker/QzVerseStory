import React from "react";
import "./Horizontal.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Horizontal() {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
