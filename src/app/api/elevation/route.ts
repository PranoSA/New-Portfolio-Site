import { NextApiRequest, NextApiResponse } from "next";
// 

// Require Auth For Posting

//  / GET 

export function GET(req: NextApiRequest, res:NextApiResponse){
    //return res.status(200).json({ message: "Hello From Elevation" });
    const { id } = req.query;

    res.status(200).json({ message: `Hello From Elevation ${id}` });
}

export async function POST(req: NextApiRequest, res:NextApiResponse){
    //return res.status(200).json({ message: "Hello From Elevation" });
    const { id } = req.query;

    res.status(200).json({ message: `Hello From Elevation ${id}` });
}