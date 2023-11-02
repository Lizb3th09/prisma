'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { useArtistaContext } from '@/provider/artistaProvider';
import { eliminarArtista } from '@/libs/conexiones';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const TarjetaArtista = ({ artista }) => {
  const route = useRouter()
  const {setArtista} = useArtistaContext()


  const handleEliminar = async (id) => {
    try {
      const respuesta = await eliminarArtista(id);
      console.log(respuesta);
    } catch (error) {
      console.error('Error al eliminar el artista:', error);
    }
  };

  return (


    
    <div  className="bg-white rounded-lg shadow-md p-6 my-4 mx-auto  max-w-lg  ">



      <div  key={artista.id} className="flex ">
      <div className=' flex flex-col '><AccountCircleIcon sx={{ fontSize: 120 }}/></div>
        <div className="ms-8 mt-4">
          <h2 className="text-xl font-semibold">{artista.nombre}</h2>
          <p className="text-gray-600">{artista.edad} años</p>
          <p className="text-gray-600">Album: {artista.banda}</p>
          <p className="text-gray-600 ">Genero: {artista.generoMusical}</p>
        </div>

  


<div className='flex flex-col '>

<button
  type="button"
  onClick={() => handleEliminar(artista.id)}
  className='p-7'  // Clase 'ml-auto' para alinear a la derecha
>
  <DeleteIcon sx={{ fontSize: 30 }} className=' hover:text-red-600 text-black'/>
</button>

<button
  onClick={() => {
    setArtista(artista);
    route.push('/Registro');
  }}
  className='p-2' // Clase 'ml-auto' para alinear a la derecha
>
  <EditIcon  sx={{ fontSize: 30 }}  className=' hover:text-teal-400 text-black'/>
</button>

</div>
  
  
      </div>

    </div>
  );
};

export default TarjetaArtista;