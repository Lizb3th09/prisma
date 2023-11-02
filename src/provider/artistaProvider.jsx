'use client'
import { createContext,useContext,useState } from "react";

// creamos el contexto
const artistaContext = createContext()

export function useArtistaContext() {
  return useContext(artistaContext)
}


export function ArtistaContextProvider({children}){
  const [artista, setArtista] = useState(null)

  return(
   <artistaContext.Provider value={{artista,setArtista}} > {children}</artistaContext.Provider>
  )

}

