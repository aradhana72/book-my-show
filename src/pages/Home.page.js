import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component.js";

const HomePage = () => {
  return (
  <>
  <div className="container mx-auto px-4">
  <h1 className="text-2xl font-bold text-gray-800">
The best of Entertainment
  </h1>
  <EntertainmentCardSlider />
  <Premier />
  </div>
  </>
);
};

export default HomePage;
