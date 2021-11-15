import React from 'react'
import Form from '../../component/organisms/Contact/Form'
import logo from './../../assets/images/logo-ALTA-v2@2x.png'
import './style.scss'

const Contact = () => {  
  return (
    <div className="p-contact flex-column flex-lg-row flex-md-row">
      <div className="p-contact__cover d-flex justify-content-center align-items-center">
        <div className="p-contact__cover-img">
          <img src={logo} alt="" />          
        </div>
      </div>
      <div className="p-contact__content d-flex justify-content-center align-items-center my-md-0 py-4">
        <div className="p-contact__content-form col-lg-7 col-9">
          <h3 className="mb-3">Contact Us</h3>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
