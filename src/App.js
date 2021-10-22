import React from 'react';
import MainRoute from "./Routes/MainRoute";
import "./assets/Style.scss"
import "./assets/css/style.css";
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker';

const TRACKING_ID = "G-LLCB7Y2YTH"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <RouteChangeTracker/>
      <MainRoute />
    </div>
  );
}

export default App;