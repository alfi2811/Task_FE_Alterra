import React from 'react'
import './style.scss'
import logo from './../../assets/images/logo-ALTA.png'

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div class="container justify-content-between">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="./index.html">
          <img class="logo-brand" src={logo} alt=""/>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">                
          <ul class="navbar-nav mb-2 mb-lg-0 me-3 ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html">HOME</a>
            </li>          
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html">ABOUT</a>
            </li>          
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html">EXPERIENCE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html">CONTACT</a>
            </li>
          </ul>                          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
