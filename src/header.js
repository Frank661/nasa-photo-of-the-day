import axios from "axios"
import React, { useEffect, useState } from "react"


const NasaHeader = () => {

  console.log("alot of stuff")
  return(
    <header> 
    <img className="logo" alt = "nasa logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
    <p className="header">
        Nasa's Picture of the Day
      </p>

     </header>

  )


}
export default NasaHeader