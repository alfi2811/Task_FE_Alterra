import React, { useRef, useState } from "react";

const Form = () => {
  const nameRegex = /^[A-Za-z]*$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const baseError = {
    name: "",
    email: "",
    noHandphone: "",
  };
  const [data, setData] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseError);
  const suratKesungguhan = useRef('')
  const changeValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkName = (e) => {
    if (!nameRegex.test(e.target.value)) {
      setErrMsg({ ...errMsg, name: "Nama Lengkap Harus Berupa Huruf" });
    } else {
      setErrMsg({ ...errMsg, name: "" });
    }
  };

  const checkEmail = (e) => {
    if (!emailRegex.test(e.target.value)) {
      setErrMsg({ ...errMsg, email: "Email Tidak Sesuai" });
    } else {
      setErrMsg({ ...errMsg, email: "" });
    }
  };

  const checkPhone = (e) => {
    if (!phoneRegex.test(e.target.value)) {
      setErrMsg({ ...errMsg, noHandphone: "No Handphone Tidak Sesuai" });
    } else {
      setErrMsg({ ...errMsg, noHandphone: "" });
    }
  };

  const isEmpty = (str) => (!str || str.length === 0 )

  const resetData = () => {
    setData(baseData)
    setErrMsg(baseError)
    suratKesungguhan.current.value = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEmpty(data.nama) || isEmpty(data.noHandphone) || isEmpty(data.pendidikan)
        || isEmpty(data.kelas) || isEmpty(data.email) || isEmpty(suratKesungguhan.current.value)) {
      alert('Input Data yang Wajib')
    } else {
      if(!isEmpty(errMsg.name) || !isEmpty(errMsg.email) || !isEmpty(errMsg.noHandphone)) {
        alert('Data Pendaftar Tidak Sesuai')
      } else {
        alert(`Data Pendaftar ${data.nama} Berhasil Diterima`)
        resetData()     
      }
    }    
  }  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="fullname">Full Name <span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control form-control-sm ${!isEmpty(errMsg.name)? 'is-invalid':''}`}
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
          <label htmlFor="email">Email Address <span className="text-danger">*</span></label>
          <input
            type="email"
            className={`form-control form-control-sm ${!isEmpty(errMsg.email)? 'is-invalid':''}`}
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => changeValue(e)}
            onBlur={(e) => checkEmail(e)}
            placeholder="example@domain.com"
          />
          <div className="email invalid-feedback"></div>
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
            onBlur={(e) => checkPhone(e)}
            placeholder="08127272xxxx"
          />
          <div className="phone invalid-feedback"></div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Latar Belakang Pendidikan <span className="text-danger">*</span></label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              value="it"
              checked={data.pendidikan === 'it'}
              onChange={(e) => changeValue(e)}              
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              IT
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              value="nonit"
              checked={data.pendidikan === 'nonit'}
              onChange={(e) => changeValue(e)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Non IT
            </label>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nation">Kelas Coding yang Dipilih <span className="text-danger">*</span></label>
          <select
            className="form-control form-control-sm custom-select"
            id="kelas"
            name="kelas"
            value={data.kelas}
            onChange={(e) => changeValue(e)}            
          >
            <option value="" disabled>Pilih Kelas</option>
            <option value="be">Coding Backend with Golang</option>
            <option value="fe">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formFileSm" className="form-label">
            Foto Surat Kesungguhan <span className="text-danger">*</span>
          </label>
          <input
            className="form-control form-control-sm"
            name="picSurat"
            ref={suratKesungguhan}            
            type="file"      
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Harapan Untuk Coding Bootcamp ini</label>
          <textarea
            className="form-control"
            id="harapan"
            name="harapan"
            rows="5"
            placeholder="Your Wish.."
            value={data.harapan}
            onChange={(e) => changeValue(e)}
          >            
          </textarea>
        </div>
        {
          (!isEmpty(errMsg.name) || !isEmpty(errMsg.email) || !isEmpty(errMsg.noHandphone))
          ?
          <div className="invalid-feedback d-block">
            <b>Error Message:</b>
          </div>
          :''
        }
        <div className="invalid-feedback d-block">{errMsg.name}</div>
        <div className="invalid-feedback d-block">{errMsg.email}</div>
        <div className="invalid-feedback d-block">{errMsg.noHandphone}</div>
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
