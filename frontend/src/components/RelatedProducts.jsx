import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title";
import ProductItem from './ProductItem';


const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy = products.slice()

            productsCopy = productsCopy.filter((item)=> category === item.category)
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,5))
        }

    }, [products, category, subCategory])

  return (related.length > 0) ? (
    <div className='my-28'>
        <div className='my-10 text-center flex flex-col gap-4'>
            <Title text1={"Related"} text2={"Products"} />
            <p className='text-xs sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab amet accusantium deleniti excepturi cumque esse atque ipsam reiciendis, eos ipsa.</p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5  '>
            {
                related.map((item, index)=><ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} /> )

            }
        </div>
      
    </div>
  ) : null
}

export default RelatedProducts
