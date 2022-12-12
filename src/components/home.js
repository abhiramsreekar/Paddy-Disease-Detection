import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className="homePage">
        <div className="mcard">
          <h1>PaddyCheck</h1>
          <h3>Paddy Crop Disease Detection</h3>
          <p>Farmers face loss in crop production due to many reasons, One of the major problems for the above issue are crop diseases. Early detection of the disease can help control and prevent more damage to the crop yield but finding the current disease and providing best remedies requires expert opinion or prior knowledge in order to control the disease, this is extremely time consuming and expensive. The objective of this project is to identify the type of disease present on it and suggest a diagnosis to it. In order to solve the above issue we are developing a machine learning model and using image processing to identify disease and suggest its diagnosis. The remedies provide appropriate information regarding the pesticide and insecticide to be used in order to cure the disease.</p>
          <Link to="tutorials">
          <button>How to use it?</button>
          </Link>
          <Link to="detect">
          <button>Upload Pic</button>
          </Link>
        </div>
    </div>
  )
}
