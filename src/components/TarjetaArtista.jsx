import React from 'react';

const TarjetaArtista = ({ artista }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4 mx-auto text-center max-w-lg">
      <div className="flex w-full items-center">
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{artista.nombre}</h2>
          <p className="text-gray-600">{artista.edad}</p>
          <p className="text-gray-600">{artista.banda}</p>
          <p className="text-gray-600">{artista.generoMusical}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaArtista;