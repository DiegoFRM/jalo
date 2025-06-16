import { NextResponse } from "next/server";

export function GET(request:any,{params}:any){
    const {searchParams} = new URL(request.url)
    //console.log(searchParams.get("id"))
    console.log(params)
    return NextResponse.json("asd")
}