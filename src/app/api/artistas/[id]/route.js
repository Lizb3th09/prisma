import { NextResponse } from "next/server";
import { prisma } from "@/libs/client";


export  async function GET(request, {params:{id}}){
    const artista= await prisma.artista.findFirst({
    where:{
        id: Number(id)
    }
})

    return NextResponse.json(artista) // ver el artista
}




export function DELETE(request, {params:{id}}){
    return NextResponse.json({
        mensaje:`Eliminando al artista ${id}`
    })
}






export function PUT(request, {params:{id}}){
    return NextResponse.json({
        mensaje:`Actualizando al artista ${id}`
    })
}