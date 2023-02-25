import React, { useState } from 'react'

import Sidebar from './components/Shared/Sidebar'
import { RiMapPinAddLine, RiArrowDownSLine, RiCloseFill, RiUser3Line, RiPieChart2Line, RiMenu2Line} from "react-icons/ri";
import Cart from './components/Cart';
import Header from './components/Header';
import Card from './components/Card';


const App = () => {
  const [showMenu, setShowmenu] = useState(false)
  const [showOrder, setshowOrder] = useState(false)

  const toggleMenu = () =>{
    setShowmenu(!showMenu)
    setshowOrder(false)
  }
  const ToggleOrder = () => {
    setshowOrder(!showOrder)
    setShowmenu(false)
  }
  
  return (
    <div className='bg-[#262837] w-full min-h-screen z-50'>
      <Sidebar showMenu={showMenu}/>
      <Cart showOrder={showOrder} setshowOrder={setshowOrder}/>
      {/* MENU movil */}
      <nav className="bg-[#1f1d28] lg:hidden fixed left-0 bottom-0 w-full text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl text-gray-400 ">
        <button className=' p-2'>
          <RiUser3Line />
        </button>
        <button className=' p-2'>
          <RiMapPinAddLine/>
        </button>
        <button onClick={ToggleOrder} className='p-2'>
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className=' text-white p-2'>
          {showMenu  ? <RiCloseFill/> : <RiMenu2Line />}
          
        </button>

      </nav>

    <main className='lg:pl-32 pb-20 lg:pr-96'>
      <div className='md:p-8 p-4'>
        <Header/>
          {/* Title content */}
          <div className='flex items-center gap-4 justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Menus</h2>
            <button className='text-gray-300 flex items-center bg-[#1f1d28] px-4 py-2 rounded-lg'><RiArrowDownSLine className='text-gray-300'/>Platos</button>
          </div>
          {/*content */}
          <div className='p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3'>
            {/*card */}
            <Card img="imagenes/pabellon.jpg" description="Pabellon criollo" price="$2.20" inventory="quedan 20 platos"/>
          </div>
      </div>
      
    </main>
    </div>
  )
}

export default App