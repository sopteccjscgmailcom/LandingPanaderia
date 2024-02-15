import React from 'react'

import { Inicio } from './components/Inicio'
import { Productos } from './components/Productos'
import { Ubicacion } from './components/Ubicacion'
import { Contacto } from './components/Contacto'
import { Nosotros } from './components/Nosotros'

export const App = () => {
  return (
    <>
      <nav className="">
        <div className="bg-[#551928] text-[#D9D4DE] flex justify-between max-w-7xl mx-auto p-6">
          <div className="bg-red">
            <a to='/' href="/" className="font-bold text-lg">Logo</a>
          </div>
          <div className="hidden md:block">
            <a href="#seccion1" className="hover:bg-[#D91819] px-3 py-2 rounded-md">Inicio</a>
            <a href="#seccion2" className="hover:bg-[#D91819] px-3 py-2 rounded-md">Productos</a>
            <a href="#seccion3" className="hover:bg-[#D91819] px-3 py-2 rounded-md">Ubicacion</a >
            <a href="#seccion4" className="hover:bg-[#D91819] px-3 py-2 rounded-md">Nosotros</a>
            <a href="#seccion5" className="hover:bg-[#D91819] px-3 py-2 rounded-md">Contacto</a>
          </div>
        </div>
      </nav>
      <Inicio></Inicio>
      <Productos></Productos>
      <Ubicacion></Ubicacion>
      <Nosotros></Nosotros>
      <Contacto></Contacto>
    </>
  )
}
