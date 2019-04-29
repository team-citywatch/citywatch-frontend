import React from "react";
import googleImage from "../assets/images/googlemaps.jpg";
import "../assets/styles/HomePage.css";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <img src={googleImage} alt="maps" />
    </>
  );
};

export default HomePage;
