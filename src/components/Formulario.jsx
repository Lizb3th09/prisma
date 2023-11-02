'use client'
import React, { useEffect,useState } from 'react';
import { actualizarArtista,grabarArtista } from '@/libs/conexiones';
import { useArtistaContext } from '@/provider/artistaProvider';
import { useRouter } from 'next/navigation';

const FormularioArtistas = () => {
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [banda, setbanda] = useState('')
    const [generoMusical, setgeneroMusical] = useState('')
    const [error, setError] = useState(false)

    const {artista,setArtista} = useArtistaContext()
    const route = useRouter()

    useEffect(()=>{
      if(artista !== null){
          setnombre(artista.nombre)
          setedad(artista.edad)
          setbanda(artista.banda)
          setgeneroMusical(artista.generoMusical)
      }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre,edad,banda,generoMusical].includes('')){
        setError(true)
        return
    }
    
    setError(false)
    // este objeto se crea si el artista está null
    const nuevoArtista = {
        nombre,
        edad,
        banda,
        generoMusical}
    
    if(artista === null){
        grabarArtista(nuevoArtista)
        setArtista(null)
        route.push('/')

    }
    else if(artista !== null){
        actualizarArtista(nuevoArtista,artista.id)
        setArtista(null)
        route.push('/verRegistros')
    }
}


return (
    <div className=' mx-auto text-center max-w-lg ' >
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center  border border-gray-300 bg-green-200 rounded-md  min-h-scree m-7 p-5'>
            
      {error && <div className='bg-red-500 rounded-md font-bold  '> ERROR DEBES LLENAR LOS CAMPOS</div> }

            <div className='flex flex-col w-full '>
                <label htmlFor='' className='uppercase font-bold  p-2'>Nombre</label>
                <input 
                id='nombre'
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
                 id='edad'
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
                 id='banda'
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
                 id='generoMusical'
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

            
          </div>
        </form>
        
    </div>
  )
}

export default FormularioArtistas

