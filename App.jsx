import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from './onm.jpg';
import CustomNavbar from './customenavbar';

function App() {
  // Add state variables to control the display of different sections
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="container d-flex align-items-start justify-content-center custom-margin mb-5" style={{ height: '100vh' }}>
          <div className="row">
            <div className="col-12 text-center" style={{ marginTop: '1in' }}>
              <h1 className="custom-text display-1 font-weight-bold custom-border">$ONM</h1>
              <p className="custom-text display-4 font-weight-bold">Token Address: 0xa5ba461b82abec0c2d0ab147460cdf853fecac1d</p>
              <p className='custom-text display-2 text-center'>$ONM is a revolutionary cryptocurrency with high utility. Percentage of tokens purchased will be added to a wallet.</p>
              <p className='custom-text display-2 text-center'>This wallet will then be used to fund/invest and combat Climate Change directly within our own Organization.</p>
            </div>
          </div>
        </div>
  
        <div className="container d-flex align-items-start justify-content-center custom-margin mb-5 custom-border">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className='custom-text display-1 font-weight-bold mt-7'>Tokenomics</h1>
              <p className='custom-text display-2 text-center'>25m Total Supply</p>
              <p className='custom-text display-2 text-center'>Tax 5%/5%</p>
              <p className='custom-text display-2 text-center'>1%/1% sent to marketing wallet</p>
              <p className='custom-text display-2 text-center'>Every Trade Adds Liquidity to Pool at 1%</p>
              <p className='custom-text display-2 text-center'>Earn $ONM just for holding</p>
            </div>
          </div>
        </div>
  
        <div className="container d-flex align-items-start justify-content-center custom-border">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className='custom-text display-1 font-weight-bold mt-5 text-center'>RoadMap</h1>
              <p className='custom-text display-2 text-center'>Launch October/2023</p>
              <p className='custom-text display-2 text-center'>November/2023 CMC, Coingecko, Minor dex Listings/</p>
              <p className='custom-text display-2 text-center'>December/2023 Initiate First Measures with Trading Fee Wallet Funds</p>
              <p className='custom-text display-2 text-center'>Q1 2024 Continue Growing and initiating Project Directives.</p>
              <p className='custom-text display-2 text-center'>Q2-Q4 TBD</p>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-start justify-content-center custom-border">
          <h1 className='custom-text display-1 font-weight-bold mt-5 text-center mt-5'>Keep visiting the Site for Announcements</h1>
        </div>
        <div className="navbar-container-fixed">
          <CustomNavbar />
        </div>
      </BrowserRouter>
    </div>
  );
  
  
  
}  
export default App;







