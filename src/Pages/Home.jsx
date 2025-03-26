import React from "react";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Newsletter from "../components/Newsletter";
import Reviews from "../components/Reviews";
import TrustedPartners from "../components/TrustedPartners";
const Home = () => {
  return (
    <div>
      <Banner />       
      <PropertyList />
       <Reviews/>
       <TrustedPartners/> 
      <Newsletter />   
    </div>
  );
};

export default Home;


