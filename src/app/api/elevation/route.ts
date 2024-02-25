
import { NextRequest, NextResponse } from "next/server";
// 

// Require Auth For Posting

//  / GET 

export function GET(req: NextRequest){
    //return res.status(200).json({ message: "Hello From Elevation" });
    return  NextResponse.json({ message: "Hello From Elevation" });
}