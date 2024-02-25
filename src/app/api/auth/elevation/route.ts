import { NextResponse } from "next/server";
import { MongoClient, MongoClientOptions } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/AuthOptions";
import { NextRequest } from "next/server";
// 

// Require Auth For Posting

//  / GET 

type GeoJsonEntry = {
    lat: number;
    long: number;
  };
  
  type GeoJson = {
    coordinates: GeoJsonEntry[];
  };

  type GeoJsonRequest = {
    name: string;
    path: GeoJson;
  };

  type GeoJsonWithElevation = {
    lat: number;
    long: number;
    elevation: number;
  }

  type GeoJsonInsert = {
    userid: string;
    email: string;
    name: string;
    path: GeoJson;
  }
  
  type GeoJsonResponse = {
    id: string;
    userid : string;
    email : string;
    name: string;
    path:GeoJsonWithElevation[];
  };
  

const elevationAPIURL =
  process.env.ELEVATION_API || "https://api.open-elevation.com/api/v1/lookup";


export async function POST(req: NextRequest){
    //return res.status(200).json({ message: "Hello From Elevation" });

    //ENsure authenticated
    const session = await getServerSession({ req, ...authOptions });
     if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
     }

     // Get user id and email
        const userid = session.user.id;
        const email = session.user.email;

    
    // MongoDB
    if(!process.env.MONGODB_URI){
        return NextResponse.json
        ({ message: "Internal Server Error" }, { status: 500 });
    }

    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongoClientOptions);

    try {
        await client.connect();
    } catch (error) {
        console.error(error);
        return NextResponse.json
        ({ message: "Internal Server Error" }, { status: 500 });
    }

    const db = client.db("elevation");

    const collection = db.collection("elevation");

    //const contentType = req.headers["content-type"];
    const contentType = req.headers.get("content-type");

    console.log("Content Type", contentType)

    if (!contentType) {
        return NextResponse.json
        ({ message: "Bad request, Missin Content Typed" }, { status: 400 });
    }

    if (contentType.includes("application/json")) {
        console.log("JSON");

        const body = await req.json() as GeoJsonRequest;


       // const body = req.body as GeoJsonRequest;

        const name = body.name;
        const path = body.path;

        if (!name || !path) {
            return NextResponse.json
            ({ message: "Bad request, Missing Field" }, { status: 400 });
        }

        const geoJson: GeoJson = {
            coordinates: path.coordinates,
        };

        //Check if the GeoJson is valid
        if (!geoJson.coordinates) {
            return NextResponse.json
            ({ message: "Bad request, Missing Coordinates" }, { status: 400 });
        }

        const geoJsonWithElevation: GeoJsonWithElevation[] = [];

        for(const coordinate of geoJson.coordinates){
            const lat = coordinate.lat;
            const long = coordinate.long;

            const res = await fetch(`${elevationAPIURL}?locations=${lat},${long}`);
            const data = await res.json();

            if (!data || !data.results || data.results.length === 0) {
                return NextResponse.json
                ({ message: "Internal Server Error" }, { status: 500 });
            }

            const elevation = data.results[0].elevation;

            const entry: GeoJsonWithElevation = {
                lat,
                long,
                elevation,
            };

            geoJsonWithElevation.push(entry);
        }


        //Now , For Each Coordinate, Get Elevation

        const result = await collection.insertOne({
            userid,
            email,
            name: name,
            path: geoJsonWithElevation,
        });

        const insertedId = result.insertedId.toHexString();

        const response: GeoJsonResponse = {
            id: insertedId,
            userid : userid||"",
            email : email||"",
            name,
            path: geoJsonWithElevation,
        };

        if (!result) {
            return NextResponse.json
            ({ message: "Internal Server Error" }, { status: 500 });
        }

        response.path = geoJsonWithElevation;

        return NextResponse.json(response, { status: 201 });
    }
}


export async function GET(req: NextRequest){

    // Can you get query parameters from the request?
    
    // For NOw Just Return Everything

    // Does not need authentication

    // MongoDB
    if(!process.env.MONGODB_URI){
        return NextResponse.json
        ({ message: "Internal Server Error" }, { status: 500 });
    }

    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongoClientOptions);

    try {
        await client.connect();
    } catch (error) {
        console.error(error);
        return NextResponse.json
        ({ message: "Internal Server Error" }, { status: 500 });
    }

    const db = client.db("elevation");

    const collection = db.collection("elevation");

    const result = await collection.find().toArray();

    const response: GeoJsonResponse[] = [];

    for (const doc of result) {
        response.push({
            id: doc._id.toHexString(),
            userid: doc.userid,
            email: doc.email,
            name: doc.name,
            path: doc.path,
        });
    }

    return NextResponse.json(response, { status: 200 });

}