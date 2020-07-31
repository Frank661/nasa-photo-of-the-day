import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button } from 'reactstrap';
import AlertExample from "./body"
function NasaOneimg () {

 const [space, setSpace] = useState([])
 const newDay = Math.floor(Math.random() * 31) + 1;
 const newMonth = Math.floor(Math.random() * 12) + 1;
 useEffect(() => {

   axios.get(`https://api.nasa.gov/planetary/apod?date=2019-${newMonth}-${newDay}&api_key=pouTJb42H1m44EbVY2udUhG9XaMfc7GTxpkvlhNF`)
   .then(response => {
     console.log(response)
     setSpace(response.data)
   })
   .catch(error => {
     console.log(error)
   })
 }, [] );

 function refreshPage() {
  window.location.reload(false);
}

    return (
      <div className="SpaceImg"> 
        
        
        <img className = "nasapicture" alt = "photo of the day" src={space.url}  />
          <div className="context">
            <h1>{space.title}</h1>
            <h2>{space.date}</h2>
            <p>{space.explanation}</p>
            <Button outline color="info" onClick={refreshPage}> Next Picture</Button>
            {/* <Button onClick={() => window.location.reload(false)}>Click to get a random picture</Button> */}
          </div>
       </div>
    )
}



export default NasaOneimg