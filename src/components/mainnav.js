import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./mainnav.css"

export default function mainnav() {
  return (
    <div className='mainnavs'>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PaddyCheck</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <div class="texthere nav-link" aria-current="page"><Link to="/"><label>Home</label></Link></div>
                    </li>
                    <li class="nav-item">
                    <div class="texthere nav-link" ><Link to="/tutorials"><label>Tutorial</label></Link></div>
                    </li>
                    <li class="nav-item">
                    <div class="texthere nav-link" ><Link to="/articles"><label>Articles</label></Link></div>
                    </li>
                    <li class="nav-item">
                    <div class="texthere nav-link" ><Link to="/detect"><label>Upload & Detect</label></Link></div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
