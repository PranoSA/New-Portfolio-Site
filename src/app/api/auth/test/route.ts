import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";


export async function GET(req: NextRequest, res:NextResponse) {

    const session = await getServerSession({ req, ...authOptions });
     if (session) {
      console.log(session);
      console.log(session.user);
    return NextResponse.json({ message: "Hello" });
     }
     else {
    return NextResponse.json({ message: "Hello Unidentified Person" });
    
     }
}