import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} className='hover:scale-105 transition ease-in-out' >
        <div className=''>
            <img className='' src={image[0]} alt="" />
        </div>
        <p className='text-xs sm:text-sm' >{name}</p>
        <p className='' >{currency}{price}</p>

    </Link>
  )
}

export default ProductItem
