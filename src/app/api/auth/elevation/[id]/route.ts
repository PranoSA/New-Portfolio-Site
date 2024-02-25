import { NextApiRequest, NextApiResponse} from "next";
import { NextResponse } from "next/server";
const { MongoClient } = require("mongodb"); 
import { ObjectId } from "mongodb";
// 

// Require Auth For Posting

//  / GET With Particular ID  From MongoDB

export async function GET(req: NextApiRequest, { params }: { params: {id: string } }){

    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    //return res.status(200).json({ message: "Hello From Elevation" });
    const { id } = params

    console.log("id:",id)

    
    //Get From MongoDB with Particular ID
    
    //MongoDB Connection

   try {
            await client.connect();
            const database = client.db("elevation");
            const collection = database.collection("elevation");
            //const query = { id: id };
            const query = { _id: new ObjectId(id) };
            const data = await collection.findOne(query);
            if(!data){
                return NextResponse.json({ message: "Not Found" }, { status: 404 });
            }   
            console.log("mongodb" , data)
            return NextResponse.json(data);
        } finally {
            await client.close();
        }
    


}