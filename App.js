import React from 'react';

import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import UsersSection from './UsersSection/UsersSection';
import DownloadAppSec from './DownloadAppSec/DownloadAppSec';
import PlanSection from './PlanSection/PlanSection';
import MapSection from './MapSection/MapSection';
import CompanySection from './CompanySection/CompanySection';
import HappyCusSection from './HappyCusSection/HappyCusSection';
import CallToActionSec from './CalltoactionSec/CallToActionSec';
import FooterSec from './FooterSection/FooterSec';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <div className="App">
        <Navbar />
       <HeroSection />
       <UsersSection />
       <DownloadAppSec />
       <PlanSection />
       <MapSection />
       <CompanySection />
       <HappyCusSection />
       <CallToActionSec />
        <FooterSec />
      </div>
  
  );
}

export default App;
