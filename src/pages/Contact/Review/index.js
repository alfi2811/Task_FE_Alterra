import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import decor from '../../../assets/images/img-dot@2x.png'
import './style.scss'

const Review = () => {
  const msgData = useSelector(state => state.main.messageContact)
  console.log(msgData)
  return (
    <div className="message d-flex justify-content-center align-items-center">
    <div className="message__card d-flex flex-column justify-content-between">
      <div className="message__card-info">
        <div className="message__card-info-data d-flex">
          <label>
            <span>Full Name</span>
            <span>:</span>
          </label>
          <p id="fullname" className="ms-2">
            {msgData.nama}
          </p>
        </div>
        <div className="message__card-info-data d-flex">
          <label>
            <span>Email Address</span>
            <span>:</span>
          </label>          
          <p id="email" className="ms-2">
            {msgData.email}
          </p>
        </div>
        <div className="message__card-info-data d-flex">          
          <label>
            <span>Phone Number</span>
            <span>:</span>
          </label>
          <p id="phone" className="ms-2">
            {msgData.noHandphone}
          </p>
        </div>
        <div className="message__card-info-data d-flex">          
          <label>
            <span>Nationality</span>
            <span>:</span>
          </label>
          <p id="nation" className="ms-2">
            {msgData.nation}
          </p>
        </div>

        <div className="message__card-info-data mt-4">
          <p> <i id="message">
            {msgData.message}
          </i></p>                    
        </div>        
      </div>      
      <div className="message__card-footer">
        <hr />
        <p>Thanks for contacting us!</p>
        <p>We will be in touch with you shortly.</p>
        <Link to="/" className="btn mt-3 py-2">
          Home
        </Link>
      </div>
      <div className="message__card-image">
        <img src={decor} alt="" />
      </div>
    </div>
  </div>  
  )
}

export default Review
