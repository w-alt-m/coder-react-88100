import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
    const [purchase, setPurchase]= useState(false)
    const {addItem} = useContext(CartContext)
  const onAdd = (cantidad)=> {
    addItem(detail,cantidad)
    setPurchase(true)
  }
  return (
    <div>
        <h1>Detalle del producto: {detail.name}</h1>
        <img alt={detail.name} src={detail.img}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades disponibles</p>
        <p>Precio: ${detail.price},00</p>
       {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail