import React, { Fragment } from "react";
import Heading from "./header/Heading";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <Fragment>
      <Heading></Heading>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
