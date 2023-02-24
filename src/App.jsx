import React, { useState } from 'react'

import Sidebar from './components/Shared/Sidebar'
import { RiMapPinAddLine, RiCloseLine, RiArrowDownSLine, RiSearchLine, RiCloseFill, RiUser3Line, RiPieChart2Line, RiMenu2Line} from "react-icons/ri";


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

    <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
      <div className='lg:col-span-6 md:p-8'>
        <header >
          {/* title and search */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6' >
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
          {/* tabs */}
          <nav className='text-gray-300 flex items-center md:gap-8 justify-between md:justify-start mb-6'>
            <a href="http://" className='relative py-2 pr-4 before:w-1/2 before:h-[1px] before:absolute before:bg-[#ec7c6a] text-[#ec7c6a] before:bottom-[2px] before:left-0 before:rounded-lg' >Desayunos</a>
            <a href="http://" className='py-2 pr-4 border-[#ec7c6a]'>Almuerzo</a>
            <a href="http://" className='py-2 pr-4'>Sopa</a>
            <a href="http://" className='py-2 pr-4'>Especial</a>
          </nav>
        </header>
          {/* Title content */}
          <div className='flex items-center gap-4 justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Menus</h2>
            <button className='text-gray-300 flex items-center bg-[#1f1d28] px-4 py-2 rounded-lg'><RiArrowDownSLine className='text-gray-300'/>Platos</button>
          </div>
          {/*content */}
          <div className='p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3'>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
            {/*card */}
            <div className="bg-[#1f1d28] card p-8 rounded-xl flex flex-col justify-center items-center text-center text-gray-300 gap-2">
              <img src="imagenes/hot2.png" className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full' alt="" />
              <p className='text-xl'>Contenido del plato</p>
              <span className='text-gray-400'>2$</span>
              <p className='text-gray-600'>Disponibles 20 platos</p>
            </div>
          </div>
      </div>
      <div className='lg:col-span-2 bg-[#1f1d28] fixed lg:static top-0 right-0 text-gray-300 w-full h-full '>
        <div className="relative bg-red-100">
          <RiCloseLine className='text-2xl absolute left-4 top-4 box-content p-4 rounded-full bg-[#262837]'/>
        </div>
      </div>

    </main>
      


      
    </div>
  )
}

export default App