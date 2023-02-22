import React from 'react'
import { RiHome6Line, RiPercentLine, RiPieChart2Line, RiNotification3Line, RiMessage2Line, RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = (props) => {

    const {showMenu}= props
  return (
    <div className={`bg-[#1f1d28] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className='pl-4'>
            <li>
                <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
            </li>

            <li className=' bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg'>
                <a className='bg-[#DC8274] p-4 flex justify-center rounded-xl text-white' href="http://">
                <RiHome6Line  className='text-2xl' />
                </a>
            </li>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiPercentLine  className='text-2xl' />
                </a>
            </li>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiPieChart2Line  className='text-2xl' />
                </a>
            </li>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiMessage2Line  className='text-2xl' />
                </a>
            </li>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiNotification3Line  className='text-2xl' />
                </a>
            </li>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiSettings3Line  className='text-2xl' />
                </a>
            </li>
        </ul> {/* close menu ul */}
      </div>
      <div>
        <ul className='pl-4'>
            <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors'>
                <a className=' group-hover:bg-[#DC8274] p-4 flex justify-center rounded-xl text-[#DC8274] group-hover:text-white transition-colors' href="http://">
                <RiLogoutCircleRLine  className='text-2xl' />
                </a>
            </li>
        </ul>
      </div>
    </div> /* close div principal */
  )
}

export default Sidebar