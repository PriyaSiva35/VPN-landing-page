

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from '../assests/logo.svg';
// import './Navbar.css';
// const Navbar = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="flex justify-between items-center py-4">
//         {/* Logo */}
//         <img src={logo} alt="logo" />

//         {/* Navigation Links */}
//         <div className="flex items-center text-black gap-10">
//           <Link to=""></Link>
//           <Link to="">About</Link>
//           <Link to="">Features</Link>
//           <Link to="">Pricing</Link>
//           <Link to="">Testimonials</Link>
//           <Link to="">Help</Link>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-5">
//           <button className="btn text-black">Sign In</button>
//           <button className="btn bg-danger text-light">Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.svg';
import './Navbar.css';

const Navbar = () => {
  // State to track whether the video is visible
  const [showVideo, setShowVideo] = useState(false);

  // Function to handle the click event on the "Sign In" button
  const handleSignInClick = () => {
    // Check if the browser supports the Notification API
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // If permission is already granted, create and show the notification
      new Notification("Welcome back!");
    } else if (Notification.permission !== "denied") {
      // If permission is not denied, request permission from the user
      Notification.requestPermission().then(function (permission) {
        // If the user grants permission, create and show the notification
        if (permission === "granted") {
          new Notification("Welcome back!");
        }
      });
    }
  };

  // Function to handle the click event on the "Sign Up" button
  const handleSignUpClick = () => {
    // Set showVideo state to true to display the video
    setShowVideo(true);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <img src={logo} alt="logo" />

        {/* Navigation Links */}
        <div className="flex items-center text-black gap-10">
          <Link to=""></Link>
          <Link to="">About</Link>
          <Link to="">Features</Link>
          <Link to="">Pricing</Link>
          <Link to="">Testimonials</Link>
          <Link to="">Help</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <button className="btn text-black" onClick={handleSignInClick}>Sign In</button>
          <button className="btn bg-danger text-light" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>

      {/* Video */}
      {showVideo && (
        <div className="video-container">
          {/* Add your video component here */}
          <iframe width="560" height="315" src="
          https://tenor.com/sq/view/jack-sparrow-pirates-run-away-johnny-depp-gif-5350511677469471231"
           title="Video" frameborder="0" allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
}

export default Navbar;


