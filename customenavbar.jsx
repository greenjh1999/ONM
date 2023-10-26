import React from "react";
import banner from './onm.jpg';
import github from './telegram.png';
import twitter from './twitter.png';
import { Link } from 'react-router-dom';
import pcs from './pcs.png';
import './App.css'
import './CustomNavbar.css';


function CustomNavbar() {
  return (
    <div className="custom-navbar-container custom-border">
      <img src={banner} alt='banner' className="custom-banner" />
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="https://t.me/OniziumBSC">
              <img className="github-logo" src={github} alt="github" />
              Telegram
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://twitter.com/Onizium_BSC">
              <img className="twitter-icon" src={twitter} alt="twitter" />
              Twitter
            </Link>
          </li>
          <li>
            <Link to='https://pancakeswap.finance/swap?outputCurrency=0xa5Ba461B82aBEc0c2D0AB147460CDf853fecaC1D'>
              <img className="twitter-icon" src={pcs}></img>
              Trade Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CustomNavbar;

