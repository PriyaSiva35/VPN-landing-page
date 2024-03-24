import React from 'react'
import logo from '../assests/logo.svg';
import insta from '../assests/insta.svg';
import twite from '../assests/twite.svg';
import fb from '../assests/fb.svg'; 
import "./FooterSec.css";
const FooterSec = () => {
  return (
    <div>
      
      <div className="container mx-auto py-20 bg-gray-50">
      <div className="grid grid-cols-4 gap-16">
        <div className="space-y-4">
          <img src={logo} alt="logo" />


          
          <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
          <div className="flex items-center">
            <img src={fb} alt="fb" />
            <img src={twite} alt="twite" />
            <img src={insta} alt="insta" />

          </div>
          <p className="text-gray-400">©2020LaslesVPN</p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold">product</p>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold">Engage</p>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold">Earn Money</p>
          <p>Download</p>
          <p>Pricing</p>
        </div>
      </div>
    </div>


    </div>
  )
}

export default FooterSec ;
