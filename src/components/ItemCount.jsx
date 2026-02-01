import React from 'react'

const ItemCount = ({ stock, onAdd }) => {
    return (
        <div className='flex gap-4 items-center'>
            <button className='btn btn-neutral' onClick={() => onAdd(1)}>Agregar 1 al Carrito</button>
            <span className='badge badge-outline'>Stock: {stock}</span>
        </div>
    )
}

export default ItemCount
