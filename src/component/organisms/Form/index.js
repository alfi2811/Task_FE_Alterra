import React, { useState } from "react";

const Form = () => {
  const nameRegex = /^[A-Za-z]*$/
  
  const baseData = {
    nama: '',
    email: '',
    noHandphone: '',
    pendidikan: '',
    kelas: '',
    harapan: ''
  }
  const baseError = {
    name: '',
    email: '',
    noHandphone: '',
  }
  const [data, setData] = useState(baseData)
  const [errMsg, setErrMsg] = useState(baseError)
  const changeValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })    
  };

  const checkName = (e) => {
    if(!nameRegex.test(e.target.value)) {
      setErrMsg({ ...errMsg, name: 'Nama Lengkap Harus Berupa Huruf Email Tidak Sesuai'})
    } else {
      setErrMsg({ ...errMsg, name: ''})
    }
  }

  return (
    <div>
      <form action="" id="contact-form" method="post">
        <div className="form-group mb-3">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="nama"
            name="nama"
            placeholder="Your Full Name Here..."
            value={data.nama}
            onChange={(e) => changeValue(e)}
            onBlur={(e) => checkName(e)}
          />
          <div className="fullname invalid-feedback"></div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            name="email"
            placeholder="example@domain.com"
          />
          <div className="email invalid-feedback"></div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="phone"
            name="phone"
            placeholder="08127272xxxx"
          />
          <div className="phone invalid-feedback"></div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Latar Belakang Pendidikan</label>          
          <div className="form-check">
            <input className="form-check-input" type="radio" name="background" value="it" />
            <label className="form-check-label" htmlFor="inlineRadio1">IT</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="background" value="nonit" />
            <label className="form-check-label" htmlFor="inlineRadio2">Non IT</label>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nation">Kelas Coding yang Dipilih</label>
          <select
            className="form-control form-control-sm custom-select"
            id="nation"
            name="nation"
            required
          >
            <option>Coding Backend with Golang</option>
            <option>Coding Frontend with ReactJS</option>
            <option>Fullstack Developer</option>            
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formFileSm" className="form-label">Foto Surat Kesungguhan</label>
          <input className="form-control form-control-sm" name="picSurat" id="picSurat" type="file" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Harapan Untuk Coding Bootcamp ini</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message.."
          ></textarea>
        </div>        
        <div class="invalid-feedback d-block">
          {errMsg.name}
        </div>
        <button type="submit" className="btn mt-3 px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
