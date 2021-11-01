import React from 'react'
import Navbar from '../../component/Navbar'
import profile from './../../assets/images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import './style.scss'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="p-home">
      <Navbar />
      <main className="p-home__profile py-5 flex-column flex-lg-row">
        <div className="p-home__profile-ava">
          <img src={profile} alt="ava" className="rounded-circle" />
        </div>
        <div className="p-home__profile-desc ms-lg-5 mt-4 mt-lg-0 ">
          <p>Hi, my name is</p>
          <h1>Anne Sullivan</h1>
          <h4>I build things for the web</h4>
          <Link to="/contact" >
            <div className="btn mt-3 px-4 py-2">
              Get In Touch
            </div>            
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
