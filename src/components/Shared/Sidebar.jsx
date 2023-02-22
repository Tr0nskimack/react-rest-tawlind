import React from 'react'
import { RiHome6Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className='bg-[#1f1d28] fixed left-0 top-0 w-28 h-full'>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
        <ul className=' bg-green-400 pl-4'>
            <li className=' bg-red-400 p-4 rounded-tl-lg rounded-bl-lg'>
                <a className='bg-blue-500 p-4 block rounded-lg text-white' href="http://">
                <RiHome6Line />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar