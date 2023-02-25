import React from 'react'

const Card = (props) => {
    const {description, price, img, inventory} =props
  return (
        <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
            <img src={img} className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
            <p className='text-xl'>{description}</p>
            <span className='text-gray-400'>{price}</span>
            <p className='text-gray-600'>{inventory}</p>
        </div>
  )
}

export default Card
