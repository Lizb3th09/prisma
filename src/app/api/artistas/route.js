import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(){

    const artistas = await prisma.artista.findMany();

    return NextResponse.json(artistas)
}


export async function POST(request){
    const {nombre, edad, banda, generoMusical} = await request.json()

    const nuevoArtista = await prisma.artista.create({ 
        data: {
            nombre: nombre,
            edad: edad,
            banda: banda,
            generoMusical: generoMusical
        }
    })

    return NextResponse.json(nuevoArtista)
}

// Delete y put 