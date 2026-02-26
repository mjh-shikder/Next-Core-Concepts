import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen ">
        {children} 
      </div>

      <Footer></Footer>
    </div>
  );
};

export default layout;
