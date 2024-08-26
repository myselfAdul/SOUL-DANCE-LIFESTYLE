import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {

    const {search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const location = useLocation()

    useEffect(()=>{
        if (location.pathname == "/collection") {
            setShowSearch(true)
            
        }
        else{
            setShowSearch(false)
        }

    },[location.pathname])

  return showSearch ? (
    <div className='flex border-t border-b bg-gray-50 items-center text-center justify-center'>
        <div className='flex items-center justify-center py-2 px-2 mx-4 my-5 border-2 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none flex-1 bg-inherit text-sm px-3' type="text" placeholder='Search' />
            <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default Searchbar
