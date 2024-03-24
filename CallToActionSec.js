


import React, { useState } from 'react';
import './CallToAction.css';
import celebrationGif from '../assests/congratulations-7600.gif'; // Import your celebration GIF

const CallToActionSec = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubscribeClick = () => {
    // Show the celebration GIF and message
    setShowCelebration(true);

    // Hide the celebration GIF and message after 3 seconds (adjust the duration as needed)
    setTimeout(() => {
      setShowCelebration(false);
    }, 3000);
  };

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center shadow-2xl shadow-gray-400 bg-gray-50 rounded-xl px-10 py-10">
          <div className="space-y-2">
            <p className="text-3xl font-bold">Subscribe Now for <br /> Get Special Features!</p>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <button className="btn bg-danger text-light border-none capitalize shadow-lg shadow-danger/50 w-38" onClick={handleSubscribeClick}>Subscribe Now</button>
        </div>
      </div>

      {/* Dialogue Box for Subscription Confirmation */}
      {showCelebration && (
        <div className="dialogue-box">
          <div className="dialogue-content">
            <img src={celebrationGif} alt="Celebration" className="celebration-gif" />
            <p className="dialogue-message font-bold text-5xl text-md-center text-danger  ">You Are Subscribed!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CallToActionSec;
