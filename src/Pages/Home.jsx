// import React, { useState, useEffect } from "react";
// import Slideshow from "../components/Slideshow";
// import Banner from "../components/Banner";
// import PropertyList from "../components/PropertyList";
// import Reviews from "../components/Reviews";
// import Glowindia from "../components/Glowindia";
// import Mission from "../components/Mission2030";
// import BusinessPlans from "../components/BusinessPlans";
// import Vision from "../components/Vision";
// import TrustedPartners from "../components/TrustedPartners";
// import Trip from "../components/Trip";

// import { useLocation } from "react-router-dom";

// const Home = () => {
//   const location = useLocation();
//   const [showLanding, setShowLanding] = useState(true);

//   useEffect(() => {
//     if (location.pathname !== "/") {
//       setShowLanding(false);
//     }
//   }, [location]);

//   return (
//     <div>
//       {showLanding && <Slideshow />} 
//       <Banner/>
//       <PropertyList />
//       <Reviews />
//       <Glowindia/>
//       <Mission />
//       <Vision />
//       <TrustedPartners />
//       <Trip />
//       <BusinessPlans />
//     </div>
//   );
// };

// export default Home;





import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import OwnerMessage from "../components/OwnerMessage";
import PropertyList from "../components/PropertyList";
import Reviews from "../components/Reviews";
import Glowindia from "../components/Glowindia";
import Mission from "../components/Mission2030";
import CurrentProjects from "../Pages/Currentprojects";
import BusinessPlans from "../components/BusinessPlans";
import Vision from "../components/Vision";
import TrustedPartners from "../components/TrustedPartners";
import Trip from "../components/Trip";

const Home = () => {
  const location = useLocation();
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    setShowLanding(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div>
      {showLanding && <Slideshow />}

      <Banner />
      <OwnerMessage />
      <PropertyList />
      <Reviews />
      <Glowindia />
      
      <Mission />
      <CurrentProjects />
      <BusinessPlans />

      <Vision />
      <TrustedPartners />
      <Trip />
    </div>
  );
};

export default Home;
