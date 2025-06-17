import { NextResponse } from "next/server";
import { missions} from "../mockData";

export function GET(request:any,{params}:any){
    const {searchParams} = new URL(request.url)
    let elem:any = undefined
    //console.log(searchParams.get("id"))
    console.log(missions.length)
    for(let i = 0;i<=missions.length-1;i++){
        if(missions[i].id == params.id){
            elem = missions[i]
        }
    }
    const content = missions
    console.log(params)
    return NextResponse.json(elem)
}