import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Reviews from "../components/Reviews";
import Glowindia from "../components/Glowindia";
import Mission from "../components/Mission2030";
import Vision from "../components/Vision";
import TrustedPartners from "../components/TrustedPartners";
import Trip from "../components/Trip";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLanding(false);
    }
  }, [location]);

  return (
    <div>
      {showLanding && <Slideshow />} 
      <Banner/>
      <PropertyList />
      <Reviews />
      <Glowindia/>
      <Mission />
      <Vision />
      <TrustedPartners />
      <Trip />
     
    </div>
  );
};

export default Home;


