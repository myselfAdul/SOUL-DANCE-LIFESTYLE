import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex items-center gap-2 justify-center sm:text-3xl text-2xl'>
        <p className='text-gray-500 '>{text1} <span className='text-gray-700 md:font-bold' >{text2}</span> </p>
        <p className='w-8 sm:w-12 h-[2px] sm:h-[2px] bg-slate-600'></p>
      
    </div>
  )
}

export default Title
