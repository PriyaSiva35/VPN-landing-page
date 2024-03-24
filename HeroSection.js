import React from 'react';
import hero from '../assests/hero.svg';
import './HeroSection.css';

const HeroSection = () => {
  // Define the function to be called when the button is clicked
  const handleGetStartedClick = () => {
    // Redirect to the desired route
    window.location.href = '/plan';
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-screen">
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-bold ">Want anything to be <br /> easy with <br /> LaslesVPN.</p>
            <p>Provide a network for all your needs with ease and fun using LaslesVPN <br /> discover interesting features from us.</p>
            {/* Add onClick attribute to the button with the handleGetStartedClick function */}
            <button className="btn bg-danger text-white border-none capitalize shadow-lg shadow-white/50 w-48" onClick={handleGetStartedClick}>Get Started</button>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
