import React from 'react'
import {RiSearchLine} from "react-icons/ri";

const Header = () => {
  return (
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
  )
}

export default Header