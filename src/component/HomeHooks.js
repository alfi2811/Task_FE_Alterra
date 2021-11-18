// import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import SearchInput from "./SearchInput";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import spin from '../assets/images/loadingSpin.gif'

const GET_PASSENGER = gql`
  query MyQuery2($id: Int_comparison_exp = {}) {
    kampus_merdeka_anggota(where: {id: $id}, order_by: {id: asc}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const GET_PASSENGER_SUBSCRIPTION = gql`
  subscription MySubscription($id: Int_comparison_exp = {}) {
    kampus_merdeka_anggota(where: {id: $id}, order_by: {id: asc}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const INSERT_PASSENGER = gql`
  mutation MyMutation2($jenisKelamin: String = "", $nama: String = "", $umur: Int!) {
    insert_kampus_merdeka_anggota(objects: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
      affected_rows
    }
  }
`;

const DELETE_PASSENGER = gql`
  mutation MyMutation2($id: Int!) {
    delete_kampus_merdeka_anggota(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

const UPDATE_PASSENGER = gql`
  mutation MyMutation2($id: Int = 10, $jenisKelamin: String = "", $nama: String = "", $umur: Int = 10) {
    update_kampus_merdeka_anggota_by_pk(pk_columns: {id: $id}, _set: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
      id
    }
  }
`;

const HomeHooks = () => {
  const baseForm = {
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  }
  
  // option pertama subscription
  // const [variableID, setVariableID] = useState({})  
  // const { data: dataPengunjung, loading, error: errGetAllData } = useSubscription(GET_PASSENGER_SUBSCRIPTION, {
  //   variables: {
  //     id: variableID
  //   },    
  // })

  // option kedua subscription
  const { data: dataPengunjung, loading, error: errGetAllData, subscribeToMore, refetch } = useQuery(GET_PASSENGER, {
    notifyOnNetworkStatusChange: true
  });
  
  useEffect(() => {    
    subscribeToMore({
      document: GET_PASSENGER_SUBSCRIPTION,
      updateQuery: ( prev, { subscriptionData: { data } }) => {
        return data
      }
    }) 
    // eslint-disable-next-line
  }, []) 

  const [insertPass, {loading: loadingInsert}] = useMutation(INSERT_PASSENGER)
  const [deleteTodo, {loading: loadingDelete, error: errorDel }] = useMutation(DELETE_PASSENGER)
  const [updatePass, {loading: loadingUpdate}] = useMutation(UPDATE_PASSENGER)
  
  const [data, setData] = useState([]);
  const [baseInput, setBaseInput] = useState(baseForm);
  const [errQuery, setErrQuery] = useState(null)

  useEffect(() => {
    setData(dataPengunjung?.kampus_merdeka_anggota);
  }, [dataPengunjung]);
  

  useEffect(() => {
    if (errGetAllData) {      
      setErrQuery(errGetAllData?.message);
    }
    if (errorDel) {      
      setErrQuery(errorDel?.message);
    }
  }, [errGetAllData, errorDel]);

  const tambahPengunjung = (newUser) => {    
    insertPass({
      variables: {        
        nama: newUser.nama,
        umur: newUser.umur,
        jenisKelamin: newUser.jenisKelamin
      }      
    })
    setBaseInput(baseForm)
  };

  const updatePengunjung = (newUser) => {    
    updatePass({
      variables: {
        id: newUser.id,
        nama: newUser.nama,
        umur: newUser.umur,
        jenisKelamin: newUser.jenisKelamin
      }
    })
    setBaseInput(baseForm)
  };

  const hapusPengunjung = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteTodo({
      variables: {
        id: id,
      }
    })
  };

  const editPengunjung = (id) => {    
    let find = data.find((item) => item.id === id)    
    if(find) {
      setBaseInput({
        id: find.id,
        nama: find.nama,
        umur: find.umur,
        jenisKelamin: find.jenisKelamin,
        editing: false,
      })
    }    
  };

  const handleSearch = (id) => {    
    if (id === "") {            
      // setVariableID({})
      refetch({ id: {}})
    } else {
      // setVariableID({_eq: id})      
      refetch({ id: {_eq: id}})
    }
  };

  return (
    <div>
      <Header />
      <SearchInput handleSearch={(id) => handleSearch(id)} />
      {loading || loadingInsert || loadingDelete || loadingUpdate ? (
        <img src={spin} alt="spin" />
      ) : data?.length === 0 ? (
        <p>Data Not Found. Use other keyword</p>
      ) : (
        <ListPassenger
          data={data}          
          hapusPengunjung={(id) => hapusPengunjung(id)}
          editPengunjung={(id) => editPengunjung(id)}
        />
      )      
      }
      { errQuery && <p>{errQuery}</p> }

      <PassengerInput
        baseInput={baseInput}
        tambahPengunjung={(newUser) => tambahPengunjung(newUser)}
        updatePengunjung={(newUser) => updatePengunjung(newUser)}
      />
    </div>
  );
};

export default HomeHooks;
