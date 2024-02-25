import { NextApiRequest, NextApiResponse} from "next";
import { NextResponse } from "next/server";
// 

// Require Auth For Posting

//  / GET 

export function GET(req: NextApiRequest, { params }: { params: {id: string } }){
    //return res.status(200).json({ message: "Hello From Elevation" });
    const id  = params.id

    return NextResponse.json({ message: `Hello From Elevation ${id}` });

}