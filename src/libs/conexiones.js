/**
 * 
 * @returns regresa la respuesta del backedn
 */
export async function obtenerArtistas() {
    try {
        const response = await fetch('http://localhost:3000/api/artistas/',
            {
                next: {
                    revalidate: 0
                }
            })
        return response.json()

    } catch {
        if (error instanceof Error) {
            console.log(error.massage);
        }

    }
}
export async function getApiArtista() {
    //await  la función debe esperar a que se resuelva 
    //la promesa que se le pasa antes de continuar la ejecución.
    //hcae una peticion de tipo get
    const response = await fetch('http://localhost:3000/api/artistas/')
    return response.json();


}

/**
 * 
 * @param {Es el objeto con los datos {nombre,edad,banda,generoMusical}} artista 
 */
export async function grabarArtista(artista) {
    //grabar el artista a la base de datos
    await fetch('http://localhost:3000/api/artistas/', {
        method: 'Post',
        body: JSON.stringify(artista),
        headers: { 'Content-Type': 'application/json' }
    })

}



export async function eliminarArtista(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/artistas/${id}`, {
        method: 'DELETE',

      });
      return response.json();
    } catch (error) {
      console.error('Error al eliminar el artista:', error);
    }
  }




/**
 * 
 * @param {} artista Es el objeto que tiene los datos actualizados
 * @param {*} id Es el iD del artista para construir la ruta
 */
export async function actualizarArtista(artista, id) {
    //grabar el artista a la base de datos
    await fetch(`http://localhost:3000/api/artistas/${id}`, {
        method: 'PUT',
        body: JSON.stringify(artista),
        headers: { 'Content-Type': 'application/json' }
    })

}


