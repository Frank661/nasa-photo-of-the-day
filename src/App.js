import React, { useState } from "react";
import "./App.css";
import NasaOneimg from "./SpaceAdventures"
import NasaHeader from "./header"


function App() {

 const galaxy = useState([])


  return (
   
    <div className="App">
    <NasaHeader />
      <NasaOneimg />
      
      <footer> 
      <img className="footerlogo" alt = "nasa logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
       </footer>
    </div>
   
  );
}

export default App;
