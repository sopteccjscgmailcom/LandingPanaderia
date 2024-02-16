import React from 'react'
import Pan from '../assets/img/ico.jpg'

export const Cardproduct = () => {
  return (
    <div className='h-[300px] w-[200px] grid justify-items-center bg-slate-100 rounded p-4 m-2 '>
      <img className=' w-40' src={Pan} alt="Imagen" />
      <h5>Queque de frutos secos</h5>
      <p>S/1.20 C/U</p>
    </div>
  )
}
