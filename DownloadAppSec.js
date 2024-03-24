import React from 'react'
import features from '../assests/features.svg';
import greentik from '../assests/greentik.svg';
import "./DownloadAppSec.css";
const DownloadAppSec = () => {
  return (
    <div>
       <div className="container mx-auto">
      <div className="flex justify-between items-center h-screen">
        <img src={features} alt="" />
        <div className="flex flex-col gap-10">
          <p className="text-5xl font-bold">We Provide Many <br /> Features You Can Use</p>
          <p>You can explore the features that we provide with fun <br /> and have their own functions each feature.</p>
          <div className="flex gap-5 items-center">
            <img src={greentik} alt="tik" />
            <p>Powerful online protection.</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={greentik} alt="tik" />
            <p>Powerful online protection.</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src= {greentik} alt="tik" />
            <p>Powerful online protection.</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src= {greentik} alt="tik" />
            <p>Powerful online protection.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DownloadAppSec ;
