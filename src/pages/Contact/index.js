import React from 'react'
import logo from './../../assets/images/logo-ALTA-v2@2x.png'
import './style.scss'

const Contact = () => {
  return (
    <div class="p-contact flex-column flex-lg-row flex-md-row">
      <div class="p-contact__cover d-flex justify-content-center align-items-center">
        <div class="p-contact__cover-img">
          <img src={logo} alt="" />
        </div>
      </div>
      <div class="p-contact__content d-flex justify-content-center align-items-center my-md-0 py-4">
        <div class="p-contact__content-form col-lg-7 col-9">
          <h3 class="mb-3">Contact Us</h3>
          <form action="" id="contact-form" method="post">
            <div class="form-group mb-3">
              <label for="fullname">
                Full Name
              </label>
              <input 
                type="text" 
                class="form-control form-control-sm" 
                id="fullname"
                name="fullname"
                placeholder="Your Full Name Here..."              
              />
              <div class="fullname invalid-feedback">
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="email">
                Email Address
              </label>
              <input 
                type="email" 
                class="form-control form-control-sm" 
                id="email" 
                name="email" 
                placeholder="example@domain.com"              
              />
              <div class="email invalid-feedback">
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="phone">
                Phone Number
              </label>
              <input 
                type="text" 
                class="form-control form-control-sm" 
                id="phone" 
                name="phone" 
                placeholder="08127272xxxx"              
              />
              <div class="phone invalid-feedback">
              </div>
            </div> 
            <div class="form-group mb-3">
              <label for="nation">
                Nationality
              </label>
              <select class="form-control form-control-sm custom-select" id="nation" name="nation" required>
                <option>India</option>
                <option>Indonesia</option>
                <option>Inggris</option>
                <option>Italia</option>              
              </select>
            </div>  
            <div class="form-group mb-3">
              <label for="message">
                Message
              </label>
              <textarea 
                class="form-control" 
                id="message" 
                name="message" 
                rows="5"
                placeholder="Your Message.."
              ></textarea>
            </div>          
            <button type="submit" class="btn mt-3 px-4 py-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
