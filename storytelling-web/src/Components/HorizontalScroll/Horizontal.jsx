import React from "react";
import "./Horizontal.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Bottom from "../BottomBar/Bottom";

export default function Horizontal() {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
        <Bottom />
      </div>
    </>
  );
}
