import Footer from "@/components/shared/footer/Footer";
import Heading from "@/components/shared/header/Heading";
import React from "react";

const JobSavePage = () => {
  return (
    <div>
      <Heading></Heading>
      <div className="page-container grid grid-cols-12 gap-7 py-10">
        <div className="grid col-start-1 col-end-9 gap-7 h-fit"></div>
        <div className="grid col-start-9 col-end-13 gap-7 h-fit"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default JobSavePage;
