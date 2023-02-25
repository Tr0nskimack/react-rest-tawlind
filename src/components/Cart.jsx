import React from 'react'
import { RiMapPinAddLine, RiCloseLine, RiDeleteBin5Line} from "react-icons/ri";
const Cart = (props) => {
    const {showOrder, setshowOrder} = props
    
  return (
    <div className={`lg:col-span-2 z-50 p-4 bg-[#1f1d28] fixed top-0 text-gray-300 w-full lg:w-96 lg:right-0 h-full transition-all
      ${showOrder ? "right-0" : "-right-full"}`}>
        {/* Orders */}
        <div className="relative pt-16 text-gray-300 h-full">
          <RiCloseLine onClick={()=>setshowOrder(false)} className='lg:hidden text-2xl absolute left-4 top-4  box-content p-3 rounded-full bg-[#262837]'/>
          <h1 className='text-2xl my-4'>Orden: 1655789</h1>
        {/* Tabs */}
        <div className='flex items-center gap-4 wrap mb-8 '>
          <button className='bg-[#DC8274] py-2 px-4 rounded-xl '>Aqui</button>
          <button className=' text-[#DC8274] py-2 px-4 rounded-xl border border-gray-600 '>Llevar</button>
          <button className=' text-[#DC8274] py-2 px-4 rounded-xl border border-gray-600 '>Delivery</button>
        </div>
        {/* Car */}
        <div>
          <div className='grid grid-cols-6 mb-4 '>
            <h5 className='col-span-4'>item</h5>
            <h5>Ctd</h5>
            <h5>Costo</h5>
          </div>
            {/* Products */}
          <div className=' h-[400px] md:h-[720px] lg:h-[540px] overflow-scroll'>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4 '>
              <div className="grid grid-cols-6">
                {/* description */}
                <div className="col-span-4 flex items-center gap-3 mb-4">
                  <img src="/imagenes/hot.jpg" className=' w-16 h-16 rounded-full object-cover' />
                  <div>
                    <h5 className="text-sm"> Perros Calientes</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* cantidad */}
                <div>
                  <span>2</span>
                </div>
                {/* precio */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* note */}
              <div className='grid grid-cols-6 items-center'>
                <form className="col-span-5 ">
                  <input type="text" className='bg-[#1f1d28] rounded-lg py-2 px-4 outline-none' placeholder='Ordene ahora' />
                </form>
                <div >
                  <button className='border border-red-500 p-2 rounded-lg'><RiDeleteBin5Line className='text-[#DC8274]' /></button>
                </div>

              </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className="grid grid-cols-6 ">
                {/* description */}
                <div className="col-span-4 flex items-center gap-3 mb-4">
                  <img src="/imagenes/hot.jpg" className=' w-16 h-16 rounded-full object-cover' />
                  <div>
                    <h5 className="text-sm"> Perros Calientes</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* cantidad */}
                <div>
                  <span>2</span>
                </div>
                {/* precio */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* note */}
              <div className='grid grid-cols-6 items-center'>
                <form className="col-span-5 ">
                  <input type="text" className='bg-[#1f1d28] rounded-lg py-2 px-4 outline-none' placeholder='Ordene ahora' />
                </form>
                <div >
                <button className='border border-red-500 p-2 rounded-lg'><RiDeleteBin5Line className='text-[#DC8274]' /></button>
                </div>

              </div>
            </div>
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className="grid grid-cols-6 ">
                {/* description */}
                <div className="col-span-4 flex items-center gap-3 mb-4">
                  <img src="/imagenes/hot.jpg" className=' w-16 h-16 rounded-full object-cover' />
                  <div>
                    <h5 className="text-sm"> Perros Calientes</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* cantidad */}
                <div>
                  <span>2</span>
                </div>
                {/* precio */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* note */}
              <div className='grid grid-cols-6 items-center'>
                <form className="col-span-5 ">
                  <input type="text" className='bg-[#1f1d28] rounded-lg py-2 px-4 outline-none' placeholder='Ordene ahora' />
                </form>
                <div >
                <button className='border border-red-500 p-2 rounded-lg'><RiDeleteBin5Line className='text-[#DC8274]' /></button>
                </div>

              </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className="grid grid-cols-6">
                {/* description */}
                <div className="col-span-4 flex items-center gap-3 mb-4">
                  <img src="/imagenes/hot.jpg" className=' w-16 h-16 rounded-full object-cover' />
                  <div>
                    <h5 className="text-sm"> Perros Calientes</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* cantidad */}
                <div>
                  <span>2</span>
                </div>
                {/* precio */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* note */}
              <div className='grid grid-cols-6 items-center'>
                <form className="col-span-5 ">
                  <input type="text" className='bg-[#1f1d28] rounded-lg py-2 px-4 outline-none' placeholder='Ordene ahora' />
                </form>
                <div >
                <button className='border border-red-500 p-2 rounded-lg'><RiDeleteBin5Line className='text-[#DC8274]' /></button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}
        <div className='bg-[#262837] absolute w-full p-4 bottom-0 left-0'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-gray-400'>Descuento</span>  
            <span>$0</span>  
          </div>
          <div className='flex items-center justify-between mb-6'>
            <span className='text-gray-400'>Subtotal</span>  
            <span>$201.03</span>  
          </div>
          <div className=''>
            <button className='bg-[#Dc8274] w-full py-2 px-4 rounded-lg'>Continuar con su compra</button>
          </div>
        </div>


        </div>
      </div>
  )
}

export default Cart