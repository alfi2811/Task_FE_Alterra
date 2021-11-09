import React, { useState, useRef } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import { useHistory, useLocation } from 'react-router-dom';
import "./style.scss";

const Sidemenu = () => {
  const [show, setShow] = useState(false)  
  const elementRef = useRef();
  let history = useHistory()
  const address = useLocation()
  const menus = [
    {
      url: '/',
      title: 'HOME'
    },
    {
      url: '/about/about-app',
      title: 'ABOUT'
    },    
    {
      url: '/register',
      title: 'REGISTRATION'
    },    
  ]
  const handleShow = () => {    
    const divElement = elementRef.current;    
    divElement.className = show? 'o-sidemenu p-4 hide' : 'o-sidemenu p-4 show'        
    setShow(!show);
  }

  const goToUrl = (url) => {  
    if (address.pathname === url) {
      history.replace(url);
    } else {
      history.push(url);
    }
  }  
  return (  
    <>          
      <div id="coba" ref={elementRef} className={`o-sidemenu p-4`}>
        <div className="o-sidemenu__icon">    
          <IoClose size="3em" color="white" onClick={() => handleShow()} />
        </div>
        <ul className="o-sidemenu__list">
          {
            menus.map((data, idx) => (
              <li key={idx} onClick={() => goToUrl(data.url)}>
                {data.title}                
              </li>
            ))
          }            
        </ul>
      </div> 
      :
      <div className={`o-sidemenu__closed p-4 ${show? "open": ""}`}>    
        <IoMenu size="3em" color="grey" onClick={() => handleShow()} />
      </div>      
    </>
  )
}

export default Sidemenu
