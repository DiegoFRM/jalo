import { NextResponse } from "next/server";
import { experiences} from "../mockData";



export async function GET(){
    return NextResponse.json(experiences)
}



export async function POST(request:any){
    const data = await request.json()
    return NextResponse.json({
        message:"Creando datos"
    })
}


export function PUT(){
    return NextResponse.json({
        message:"Actualizando datos"
    })
}


export function DELETE(){
    return NextResponse.json({
        message:"Eliminando datos"
    })
}