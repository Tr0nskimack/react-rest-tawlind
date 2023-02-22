import React, { useState } from 'react'

import Sidebar from './components/Shared/Sidebar'
import { RiMapPinAddLine, RiUser3Line, RiPieChart2Line, RiMenu2Line} from "react-icons/ri";


const App = () => {
  const [showMenu, setShowmenu] = useState(false)
  const [showorder, setShoworder] = useState(false)

  const toggleMenu = () =>{
    setShowmenu(!showMenu)
  }
  return (
    <div className='bg-[#262837] w-full min-h-screen z-50'>
      <Sidebar showMenu={showMenu}/>
      {/* movil */}
      <nav className="bg-[#1f1d28] lg:hidden fixed left-0 bottom-0 w-full text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl text-gray-400 ">
        <button className=' p-2'>
          <RiUser3Line />
        </button>
        <button className=' p-2'>
          <RiMapPinAddLine/>
        </button>
        <button className=' p-2'>
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className=' text-white p-2'>
          <RiMenu2Line />
        </button>

      </nav>
    </div>
  )
}

export default App