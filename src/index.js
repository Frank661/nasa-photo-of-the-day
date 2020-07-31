import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(<App />, document.getElementById("root"));


const nsaImage = document.querySelector(".nasapicture")
 nsaImage.addEventListener('mouseenter', () => {
   nsaImage.style.transform = "scale(1.1)"
 })

nsaImage.addEventListener('mouseleave', () => {
  nsaImage.style.transform = "scale(1)"
})