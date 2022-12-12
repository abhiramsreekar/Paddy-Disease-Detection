import React from 'react'
import Pic from '../pics/graph.gif'
import './detect.css'
import { useState } from 'react'

export default function Detect() {
  

  return (
    <div className='detec'>
      <form action="">
        <input
          className="choose"
          type="file"
          id="img"
          accept='image/*'
        />
        <button>Submit</button>
      </form> 

      <h1>Results</h1>
      <div className="display">
        <div className="first">
          <h2>Disease detected:</h2>
          <p>Potato Early blight</p>
          <h2>Accuracy</h2>
          <p>98%</p>
          <h2>Prevention</h2>
          <p>Pesticides, alcohol</p>
        </div>
        <div className="second">
          <img className="graphpic" src={Pic} alt="" />
        </div>
      </div>
      
    </div>
  )
}

