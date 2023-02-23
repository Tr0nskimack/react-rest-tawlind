import React, { useState } from 'react'

import Sidebar from './components/Shared/Sidebar'
import { RiMapPinAddLine, RiSearchLine, RiCloseFill, RiUser3Line, RiPieChart2Line, RiMenu2Line} from "react-icons/ri";


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
          {showMenu  ? <RiCloseFill/> : <RiMenu2Line />}
          
        </button>

      </nav>

    <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
      <div className='lg:col-span-6'>
        <header className=' p-4'>
          {/* title and search */}
          <div flex flex-col gap-4 mb-6>
            <div>
              <h1 className='text-2xl text-gray-300'>Jose Marcano</h1>
              <p className='text-gray-500'>22/2/2023</p>
            </div>
            <form>
              <div className='w-full relative'>
                <RiSearchLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-300'/>
                <input type="text" placeholder='Ingrese busqueda' className='bg-[#1f1d28] outline-none w-full  py-2 p-8 pr-4 text-gray-300 rounded-lg' />
              </div>
            </form>
          </div>
          {/* nav */}
          <nav className='text-gray-300 flex items-center justify-between '>
            <a href="http://" className='relative py-2 pr-4 before:w-1/2 before:h-[1px] before:absolute before:bg-[#ec7c6a] text-[#ec7c6a] before:bottom-[2px] before:left-0 before:rounded-lg' >Desayunos</a>
            <a href="http://" className='py-2 pr-4 border-[#ec7c6a]'>Almuerzo</a>
            <a href="http://" className='py-2 pr-4'>Sopa</a>
            <a href="http://" className='py-2 pr-4'>Especial</a>
          </nav>
        </header>
      </div>
      <div className='lg:col-span-2 bg-red-300 fixed lg:static right-0'>Carrito</div>

    </main>
      


      
    </div>
  )
}

export default App