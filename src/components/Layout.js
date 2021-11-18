import React from "react";
import Search from "../components/Search/Search";
import Forcast from "./Forecast/Forecast";
import Next from "./Next/Next"
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layoutBackground">
      <Search />
      <Forcast/>
      <Next />
    </div>
  );
};

export default Layout;