import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import './style.scss'

const LayoutAbout = (props) => {
  const address = useLocation()
  const history = useHistory()
  const menuList = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/about/about-app',
      title: 'About App'
    },
    {
      url: '/about/about-author',
      title: 'About Author'
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
    <div className="t-about">
      <div className="t-about__tabs p-4">
        <ul>
          {
            menuList.map((data, key) => (
            <li key={key} onClick={() => goToUrl(data.url)} className={address.pathname === data.url ? 'active':''}>
              {data.title}              
            </li>
            ))
          }          
        </ul>
      </div>
      <div className="t-about__content">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutAbout
