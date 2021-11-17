import React from "react";
import Search from "../components/Search/Search";
import Forcast from "./Forecast/Forecast";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layoutBackground">
      <Search />
      <Forcast/>
    </div>
  );
};

export default Layout;