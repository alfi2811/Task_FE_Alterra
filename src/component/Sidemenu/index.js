import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import { useHistory, useLocation } from 'react-router-dom';
import "./style.scss";

const Sidemenu = () => {
  const [show, setShow] = useState(false)  
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
  ]
  const handleShow = () => {    
    if(show) {      
      console.log("masu")
      document.getElementById("coba").classList.add('hide')
    } else {
      document.getElementById("coba").classList.remove('hide')
      document.getElementById("coba").classList.add('show')
    }
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
      <div id="coba" className={`o-sidemenu p-4`}>
        <div className="o-sidemenu__icon">    
          <IoClose size="3em" color="white" onClick={() => handleShow()} />
        </div>
        <ul className="o-sidemenu__list">
          {
            menus.map((data, key) => (
              <li key={key} onClick={() => goToUrl(data.url)}>
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
