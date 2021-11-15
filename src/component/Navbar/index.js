import React from 'react'
import './style.scss'
import { useHistory, useLocation } from 'react-router-dom';
import logo from './../../assets/images/logo-ALTA.png'

const Navbar = () => {
  let history = useHistory()
  const address = useLocation()
  const menus = [
    {
      url: '/',
      title: 'HOME'
    },
    {
      url: '/about',
      title: 'ABOUT'
    },    
    {
      url: '/news',
      title: 'NEWS'
    },    
    {
      url: '/contact',
      title: 'CONTACT'
    },    
  ]
  const goToUrl = (url) => {  
    if (address.pathname === url) {
      history.replace(url);
    } else {
      history.push(url);
    }
  }  
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="./index.html">
          <img className="logo-brand" src={logo} alt=""/>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">                
          <ul className="navbar-nav mb-2 mb-lg-0 me-3 ms-auto">
            {
              menus.map((data, idx) => (                
                <li className="nav-item" key={idx} onClick={() => goToUrl(data.url)}>                  
                  <div className={`nav-link ${address.pathname === data.url? 'active': ''}`}>{data.title}</div>
                </li>          
              ))
            }                
          </ul>                          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
