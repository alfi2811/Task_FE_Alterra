import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const GET_PASSENGER = gql`
  query MyQuery {
    kampus_merdeka_anggota {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const GET_PASSENGER_BY_ID = gql`
  query MyQuery2($_eq: Int = 1) {
    kampus_merdeka_anggota(where: { id: { _eq: $_eq } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const HomeHooks = () => {
  const { data: dataPengunjung, loading, error: errGetAllData } = useQuery(GET_PASSENGER);
  const [
    getAnggotaByID,
    { data: dataPengunjungById, loading: loadingSearch, error: errSearch },
  ] = useLazyQuery(GET_PASSENGER_BY_ID);
  
  const [data, setData] = useState([]);
  const [errQuery, setErrQuery] = useState(null)

  useEffect(() => {
    setData(dataPengunjung?.kampus_merdeka_anggota);
  }, [dataPengunjung]);

  useEffect(() => {
    setData(dataPengunjungById?.kampus_merdeka_anggota);
  }, [dataPengunjungById]);

  useEffect(() => {
    if(errSearch) {
      setErrQuery(errSearch?.message);
    } else if (errGetAllData) {      
      setErrQuery(errGetAllData?.message);
    }
  }, [errSearch, errGetAllData]);

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setData([...data, newData]);
  };

  const hapusPengunjung = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearch = (id) => {
    console.log("id: ", id === "");
    if (id === "") {
      setData(dataPengunjung?.kampus_merdeka_anggota);
    } else {
      getAnggotaByID({ variables: { _eq: id } });
    }
  };

  return (
    <div>
      <Header />
      <SearchInput handleSearch={(id) => handleSearch(id)} />
      {loading ? (
        <p>Loading....</p>
      ) : loadingSearch ? (
        <p>Searching ID....</p>
      ) : data?.length === 0 ? (
        <p>Data Not Found. Use other keyword</p>
      ) : (
        <ListPassenger
          data={data}
          hapusPengunjung={(id) => hapusPengunjung(id)}
        />
      )      
      }
      { errQuery && <p>{errQuery}</p> }

      <PassengerInput
        tambahPengunjung={(newUser) => tambahPengunjung(newUser)}
      />
    </div>
  );
};

export default HomeHooks;
