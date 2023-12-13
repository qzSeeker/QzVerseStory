import React from "react";
import "./Horizontal.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Horizontal() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
