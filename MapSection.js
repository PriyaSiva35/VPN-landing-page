import React from 'react'
import map from '../assests/map.svg';
import './MapSection.css';
const MapSection = () => {
  return (
    <div>
      
      <div className="container mx-auto py-20 flex flex-col gap-5 justify-center items-center">
      <p className="text-3xl font-semibold text-center">Huge Global Network <br /> of Fast VPN</p>
      <p className="text-center pb-16">See LaslesVPN everywhere to make it easier for you when you move <br /> locations.</p>
      <img src={map} alt="company" />
    </div>
  

    </div>
  )
}

export default MapSection ;
