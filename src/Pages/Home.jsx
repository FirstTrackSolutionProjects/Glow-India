import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Reviews from "../components/Reviews";
import Glowindia from "../components/Glowindia";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import TrustedPartners from "../components/TrustedPartners";
import Trip from "../components/Trip";
// import Newsletter from "../components/Newsletter";
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
      {showLanding && <Banner />} 
      
      <PropertyList />
      <Reviews />
      <Glowindia/>
      <Mission />
      <Vision />
      <TrustedPartners />
      <Trip />
      {/* <Newsletter/> */}
    </div>
  );
};

export default Home;


