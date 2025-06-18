import { NextResponse } from "next/server";
import { missions} from "../mockData";

export async function GET(){
    return NextResponse.json(missions)
}



export function POST(){
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