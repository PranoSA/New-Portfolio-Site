import { NextRequest, NextResponse } from "next/server";

//Get From MongoDB with Particular ID

export async function GET(req:NextRequest) {
    //return res.status(200).json({ message: "Hello From Elevation" });
    return NextResponse.json({ message: `Hello From Elevation ` });
}
