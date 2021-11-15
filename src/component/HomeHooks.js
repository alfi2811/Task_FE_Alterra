import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from 'react'
import SearchInput from "./SearchInput";

const GET_ANGGOTA = gql`
  query MyQuery {
    kampus_merdeka_anggota {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const GET_ANGGOTA_BY_ID = gql`
  query MyQuery2($_eq: Int = 1) {
    kampus_merdeka_anggota(where: {id: {_eq: $_eq}}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;



const HomeHooks = () => {
  const { data: dataPengunjung } = useQuery(GET_ANGGOTA); 
  const [getAnggotaByID, { data: dataPengunjungById }] = useLazyQuery(GET_ANGGOTA_BY_ID); 
  console.log(dataPengunjung)
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataPengunjung?.kampus_merdeka_anggota)
  }, [dataPengunjung])

  useEffect(() => {
    setData(dataPengunjungById?.kampus_merdeka_anggota)
  }, [dataPengunjungById])

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };    
    setData([...data, newData])    
  };

  const hapusPengunjung = (id) => {    
    setData(data.filter((item) => item.id !== id))    
  };  

  const handleSearch = (id) => {
    console.log("id: ", id === "")
    if(id === "") {      
      setData(dataPengunjung?.kampus_merdeka_anggota)
    } else {
      getAnggotaByID({ variables: { _eq: id }})
    }
  }

  return (
    <div>
      <Header />
      <SearchInput handleSearch={(id) => handleSearch(id)} />
      <ListPassenger
        data={data}
        hapusPengunjung={(id) => hapusPengunjung(id)}
      />
      <PassengerInput tambahPengunjung={(newUser) => tambahPengunjung(newUser)} />
    </div>
  )
}

export default HomeHooks
