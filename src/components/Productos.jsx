import React from 'react'
import { Cardproduct } from './Cardproduct'

export const Productos = () => {
  return (
    <div id='seccion2'>
      <div className='container pl-4'>
        <h3 className=" text-blue-500 text-3xl">Nuestros Productos</h3>
      </div>
      <div className='flex flex-wrap'>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
        <Cardproduct></Cardproduct>
      </div>
    </div>
  )
}
