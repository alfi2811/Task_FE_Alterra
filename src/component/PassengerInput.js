import { useEffect, useState } from "react"
import "./Home.css"

function PassengerInput(props) {
  const [state, setState] = useState(props.baseInput)
  console.log(props.baseInput)
  useEffect(() => {
    setState(props.baseInput)
  }, [props.baseInput])
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        // const newData = {
        //   nama: state.nama,
        //   umur: state.umur,
        //   jenisKelamin: state.jenisKelamin,
        // }
        if(state.id) {
          props.updatePengunjung(state)      
        } else {
          props.tambahPengunjung(state)
        }        
        console.log(state)
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" selected={state.jenisKelamin === "Pria"? true: false}>
            Pria
          </option>
          <option value="Wanita" selected={state.jenisKelamin === "Wanita"? true: false}>Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
