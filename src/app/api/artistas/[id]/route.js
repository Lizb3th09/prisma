import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

//End point for a sigle artist 
//
export async function GET(request, {params:{id}}){
    const artista = await prisma.artista.findFirst({
        where:{
            id:Number(id)
        }

    })
    
    return NextResponse.json({
        mensaje:`Obteniendo un solo artista ${id}`
    })
}

export async function DELETE(request, {params:{id}}){

    try {
        const artistaEliminado = await prisma.artista.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(artistaEliminado)
        
    } catch(error){
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
    
}

export async function PUT(request, {params:{id}}){

    const  {nombre,edad,banda,generoMusical} = await request.json()
    const artistaActualizacion = await prisma.artista.update({
        where:{
            id:Number(id)
        },
        data:{
            nombre,
            edad,
            banda,
            generoMusical
        }
    })
    
    return NextResponse.json(artistaActualizacion)
}