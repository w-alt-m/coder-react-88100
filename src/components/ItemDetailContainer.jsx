import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const [cargando, setCargando]=useState(true)
   const {id} = useParams()
 
    useEffect(()=>{
        getProducts()
        .then((res)=> setDetail(res.find((prod)=> prod.id === id)))
        .catch((error)=> console.log(error))
    },[])

  return (
    <>
       {cargando ? <Loader text='Cargando detalle...'/> : <ItemDetail detail={detail}/>} 
    </>
  )
}

export default ItemDetailContainer