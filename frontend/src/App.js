import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Devices from './components/DeviceToggle';
import SecurityCameras from './components/SecurityCamera';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => (
  <div className="dashboard">
    <Header />
    <Overview />
    <Devices />
    <SecurityCameras />
  </div>
);

export default App;
