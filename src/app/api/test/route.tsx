import { NextResponse } from "next/server";

export async function GET(req, res, ctx){


    return NextResponse.json([{id:1, name: 'amr'}]);
}