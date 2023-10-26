'use client'
import React, { useState } from 'react';
import { grabarArtista } from '@/libs/conexiones';

const FormularioArtistas = () => {
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [banda, setbanda] = useState('')
    const [generoMusical, setgeneroMusical] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const artista = {
            nombre,
            edad,
            banda,
            generoMusical}
        grabarArtista(artista)


        limpiar()
    }

    const limpiar = () => {
      setnombre('');
      setedad(0);
      setbanda('');
      setgeneroMusical('')
    }

  return (
    <div className=' mx-auto text-center max-w-lg ' >
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center  border border-gray-300 bg-green-200 rounded-md  min-h-scree m-7 p-5'>
            

            <div className='flex flex-col w-full '>
                <label htmlFor='' className='uppercase font-bold  p-2'>Nombre</label>
                <input 
                    type="String" 
                    placeholder='Nombre' 
                    className='bg-white p-2 rounded-md ' 
                    value={nombre}
                    onChange={e => setnombre(e.target.value)}
                    
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold  p-4' >Edad</label>
                <input 
                    type="number" 
                    placeholder='Edad' 
                    className='bg-white  rounded-md  p-2'
                    value={edad}
                    onChange={(e) => setedad(parseInt(e.target.value, 10))}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold  p-4' >Banda</label>
                <input 
                    type="String" 
                    placeholder='Banda' 
                    className='bg-white p-2 rounded-md'
                    value={banda}
                    onChange={e => setbanda(e.target.value)}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold  p-4' >Genero Musical</label>
                <input 
                    type="String" 
                    placeholder='Genero Musical' 
                    className='bg-white p-2 rounded-md'
                    value={generoMusical}
                    onChange={e => setgeneroMusical(e.target.value)}
                    ></input>
            </div>
             
          <div className='flex  mt-3 text-white  space-x-4'>
          <div className='flex w-full justify-end '>
                <button 
                    type='submit' 
                    className='bg-black rounded-md p-2 font-semibold hover:bg-gray-600 transition-colors duration-300 cursor-pointer'
                    onClick={handleSubmit}
                    >Enviar</button>
            </div>

            <div className='flex w-full justify-end '>
                <input 
                    type='button' 
                    value={'Limpiar'} 
                    className='bg-black rounded-md p-2 font-semibold hover:bg-gray-600 transition-colors duration-300 cursor-pointer'
                    onClick={limpiar}
                    ></input>
            </div>
          </div>
        </form>
        
    </div>
  )
}

export default FormularioArtistas