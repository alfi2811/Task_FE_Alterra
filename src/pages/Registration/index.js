import React from 'react'
import Form from '../../component/organisms/Form'
import logo from '../../assets/images/logo-ALTA-v2@2x.png'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './style.scss'
import { useHistory } from 'react-router-dom';

const Registration = () => {
  let history = useHistory()
  return (
    <div className="p-registration flex-column flex-lg-row flex-md-row">
    <div className="p-registration__cover d-flex justify-content-center align-items-center">
      <div className="p-registration__cover-img">
        <img src={logo} alt="" />
      </div>
      <div className="p-registration__cover-icon">
        <IoArrowBackCircleSharp size="3em" color="white" onClick={() => history.goBack()} />
      </div>
    </div>
    <div className="p-registration__content d-flex justify-content-center align-items-center my-md-0 py-4">
      <div className="p-registration__content-form col-lg-8 col-9">
        <h3 className="mb-3">Pendaftaran Peserta Coding Bootcamp</h3>        
        <Form />
      </div>
    </div>
  </div>
  )
}

export default Registration
