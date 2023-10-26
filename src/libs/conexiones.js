/**
 * 
 * @returns regresa la respuesta del backedn
 */
export async function obtenerArtistas(){
    try {
        const response = await fetch('http://localhost:3000/api/artistas/',{cache:'no-store'})
        return response.json()

    } catch{
        if(error instanceof Error){
        console.log(error.massage);
        }
        
    }
}
export async function getApiArtista(){
    
      const response = await fetch('http://localhost:3000/api/artistas/')
      return response.json();
  
  
  }

/**
 * 
 * @param {Es el objeto con los datos {nombre,edad,banda,generoMusical}} artista 
 */
export async function grabarArtista(artista){
    //grabar el artista a la base de datos
    await fetch('http://localhost:3000/api/artistas/',{
        method:'Post',
        body: JSON.stringify(artista),
        headers: {'Content-Type': 'application/json'}
    })
    
}