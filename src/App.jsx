import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
// import CurrentProject from "./components/CurrentProject";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import PropertyDetails from "./Pages/PropertyDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import Login from "./components/Login";
import Register from "./Pages/Register";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <SidebarMenu isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        {/* <Route path="/propertydetails/:propertyType" element={<PropertyDetail />} /> */}
        {/* <Route path="/projects/current" element={<CurrentProject />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login/signup" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


