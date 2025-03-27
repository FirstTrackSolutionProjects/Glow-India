// import React from "react";
// import Banner from "../components/Banner";
// import PropertyList from "../components/PropertyList";
// // import Newsletter from "../components/Newsletter";
// import Reviews from "../components/Reviews";
// import Mission from "../components/Mission";
// import Vision from "../components/Vision";
// import TrustedPartners from "../components/TrustedPartners";
// import Trip from "../components/Trip";
// const Home = () => {
//   return (
//     <div>
//       <Banner />       
//       <PropertyList />
//        <Reviews/>
//        <Mission/>
//        <Vision/>
//        <TrustedPartners/>
//        <Trip/> 
//       {/* <Newsletter />    */}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Reviews from "../components/Reviews";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import TrustedPartners from "../components/TrustedPartners";
import Trip from "../components/Trip";
import Newsletter from "../components/Newsletter";
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
      {showLanding && <Banner />}  {/* Show landing page on first visit */}
      
      <PropertyList />
      <Reviews />
      <Mission />
      <Vision />
      <TrustedPartners />
      <Trip />
      <Newsletter/>
    </div>
  );
};

export default Home;
