import React, { Component } from "react";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      dataPenumpang: [
        {
          id: 1,
          nama: "Alfi",
          umur: "19",
          jk: "Laki-Laki",
        },
        {
          id: 2,
          nama: "Syifa",
          umur: "19",
          jk: "Perempuan",
        },
      ],
      formData: {
        id: 0,
        nama: "",
        umur: "",
        jk: "",
      },
    };
  }
  deleteItem = (id) => {
    let tmp = this.state.dataPenumpang.filter((data) => data.id !== id);
    this.setState({
      dataPenumpang: tmp,
    });
  };
  changeValue = (e) => {
    console.log(e);
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      ...this.state.formData,
      id: Math.floor(Math.random() * 100) + 1,
    };
    this.setState({
      dataPenumpang: [...this.state.dataPenumpang, newData],
      formData: {
        id: 0,
        nama: "",
        umur: "",
        jk: "",
      },
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Umur</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataPenumpang.map((data, idx) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.nama}</td>
                <td>{data.umur}</td>
                <td>{data.jk} </td>
                <td>
                  <span
                    className="badge bg-danger"
                    onClick={() => this.deleteItem(data.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <label for="nama" class="form-label">
              Nama
            </label>
            <input
              type="text"
              class="form-control"
              id="nama"
              name="nama"
              value={this.state.formData.nama}
              aria-describedby="namaHelp"
              onChange={(e) => this.changeValue(e)}
            />
          </div>
          <div class="mb-3">
            <label for="umur" class="form-label">
              Umur
            </label>
            <input
              type="text"
              class="form-control"
              id="umur"
              name="umur"
              aria-describedby="umurHelp"
              onChange={(e) => this.changeValue(e)}
              value={this.state.formData.umur}
            />
          </div>
          <div class="mb-3">
            <label for="jk" class="form-label">
              Jenis Kelamin
            </label>
            <input
              type="text"
              class="form-control"
              id="jk"
              name="jk"
              aria-describedby="jkelHelp"
              onChange={(e) => this.changeValue(e)}
              value={this.state.formData.jk}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Table;
