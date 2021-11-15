import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { add_message_contact } from "../../../../redux/actions/main";

const Form = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const nameRegex = /^[A-Za-z]*$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
  
  const { baseFormContact: baseData, baseErrFormContact: baseError } = useSelector(state => state.main)
  
  const [data, setData] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseError);  
  const changeValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkName = (text) => {
    if(text === "") {
      setErrMsg({ ...errMsg, name: "Full name cannot be empty" });      
    } else {
      if (!nameRegex.test(text)) {
        setErrMsg({ ...errMsg, name: "Nama Lengkap Harus Berupa Huruf" });
      } else {
        setErrMsg({ ...errMsg, name: "" });
      }
    }
  };

  const checkEmail = (text) => {
    if(text === "") {
      setErrMsg({ ...errMsg, email: "Email cannot be empty" });      
    } else {
      if (!emailRegex.test(text)) {
        setErrMsg({ ...errMsg, email: "Email Tidak Sesuai" });
      } else {
        setErrMsg({ ...errMsg, email: "" });
      }
    }
  };

  const checkPhone = (text) => {
    if(text === "") {
      setErrMsg({ ...errMsg, noHandphone: "No Handphone cannot be empty" });      
    } else {
      if (!phoneRegex.test(text)) {
        setErrMsg({ ...errMsg, noHandphone: "No Handphone Tidak Sesuai" });
      } else {
        setErrMsg({ ...errMsg, noHandphone: "" });
      }
    }
  };

  const isEmpty = (str) => (!str || str.length === 0 )

  const resetData = () => {
    setData(baseData)
    setErrMsg(baseError)    
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
    if(isEmpty(data.nama) || isEmpty(data.noHandphone) || isEmpty(data.email)) {
      let a = {
        name: "",
        email: "",
        noHandphone: ""
      }
      if(isEmpty(data.nama)) a.name = "Full name cannot be empty"
      if(isEmpty(data.email)) a.email = "Email cannot be empty"
      if(isEmpty(data.email)) a.noHandphone = "No Handphone cannot be empty"
      setErrMsg(a)      
      alert('Input Data yang Wajib')      
      
    } else {
      if(!isEmpty(errMsg.name) || !isEmpty(errMsg.email) || !isEmpty(errMsg.noHandphone)) {
        alert('Data Pendaftar Tidak Sesuai')
      } else {
        alert(`Data Pendaftar ${data.nama} Berhasil Diterima`)        
        let msgData = data
        dispatch(add_message_contact(msgData))
        history.push('/contact/review')
      }
    }    
  }  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="fullname">Nama Lengkap <span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control form-control-sm ${!isEmpty(errMsg.name)? 'is-invalid':''}`}
            id="nama"
            name="nama"
            placeholder="Your Full Name Here..."
            value={data.nama}
            onChange={(e) => changeValue(e)}
            onBlur={(e) => checkName(e.target.value)}
          />
          <div className="invalid-feedback d-block">
            {errMsg.name}
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email <span className="text-danger">*</span></label>
          <input
            type="email"
            className={`form-control form-control-sm ${!isEmpty(errMsg.email)? 'is-invalid':''}`}
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => changeValue(e)}
            onBlur={(e) => checkEmail(e.target.value)}
            placeholder="example@domain.com"
          />
          <div className="invalid-feedback d-block">
            {errMsg.email}
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">No Handphone <span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control form-control-sm ${!isEmpty(errMsg.noHandphone)? 'is-invalid':''}`}
            id="noHandphone"
            name="noHandphone"
            value={data.noHandphone}
            onChange={(e) => changeValue(e)}
            onBlur={(e) => checkPhone(e.target.value)}
            placeholder="08127272xxxx"
          />
          <div className="invalid-feedback d-block">
            {errMsg.noHandphone}
          </div>
        </div>        
        <div className="form-group mb-3">
          <label htmlFor="nation">Nationality</label>
          <select
            className="form-control form-control-sm custom-select"
            id="nation"
            name="nation"
            value={data.nation}
            onChange={(e) => changeValue(e)}            
          >
            <option value="" disabled>Pilih Nationality</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Italy">Italy</option>
            <option value="Irlandia">Irlandia</option>
          </select>
        </div>        
        <div className="form-group mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message.."
            value={data.message}
            onChange={(e) => changeValue(e)}
          >            
          </textarea>
        </div>        
        <button type="submit" className="btn btn-submit mt-3 px-4 py-2">
          Submit
        </button>
        <div className="btn btn-outline mt-3 px-4 py-2 ml-2" onClick={resetData}>
          Reset
        </div>
      </form>
    </div>
  );
};

export default Form;