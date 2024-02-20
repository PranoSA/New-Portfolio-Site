import { NextResponse, NextRequest } from 'next/server';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { INTERNALS } from 'next/dist/server/web/spec-extension/request';

//How Should I deal with geo-json

type GeoJsonEntry = {
    lat : number,
    long: number
}

type GeoJson = {
    coordinates: GeoJsonEntry[]
}

type GeoJsonResquest = {
    name : string,
    path: GeoJson
}

type GeoJsonResponse = {
    id: string
    name : string,
    path: GeoJson
}

const elevationAPIURL = process.env.ELEVATION_API || "https://api.open-elevation.com/api/v1/lookup";

export  async function POST(req:NextRequest){
    console.log("Received Requets")

    const contentType = req.headers.get('content-type');

    if(!contentType){

        return NextResponse.json({ message: 'Bad request, Missin Content Typed' }, { status: 400 });
    }

    if(contentType.includes("application/json")){

        console.log("JSON")

        const body = await req.json();

        const name = body.name;
        const path = body.coordinates;

        if(!name || !path){
            return NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 });
        }

        const geoJson : GeoJson = {
            coordinates:path
        };

        //Check if the GeoJson is valid
        if(!geoJson.coordinates){
            return NextResponse.json({ message: 'Bad request, Missing Coordinates' }, { status: 400 });
        }

        //Check if the coordinates are valid
        for(const entry of geoJson.coordinates){
            if(!entry.lat || !entry.long){
                return NextResponse.json({ message: 'Bad request, Invalid GeoJson' }, { status: 400 });
            }
        }

        //Now we can save the data to the database

        console.log(geoJson)

        // Now Enrich the Data with Elevation
        const enrichedGeoJson : GeoJsonWithElevation = {
            coordinates: []
        }

        for(const entry of geoJson.coordinates){
            console.log(entry)
            const response = await fetch(`${elevationAPIURL}?locations=${entry.lat},${entry.long}`);
            const data = await response.json();
            const elevation = data.results[0].elevation;

            enrichedGeoJson.coordinates.push({
                lat: entry.lat,
                long: entry.long,
                elevation: elevation
            })


        }
        if(enrichedGeoJson.coordinates.length < 4){
            return NextResponse.json({ enrichedGeoJson }, { status: 200 });
        }


    if(!process.env.MONGODB_URI){
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }

    const options : MongoClientOptions = {
        auth: {
            username: process.env.MONGODB_USER,
            password: process.env.MONGODB_PASSWORD
        },
        tls: true,
    }

    

    try {
     const mongodb :MongoClient = await MongoClient.connect(process.env.MONGODB_URI, options);

       
            // Check the Mime Type of the Request
    const contentType = req.headers.get('content-type');

    if(!contentType){
        return NextResponse.json({ message: 'Bad request, Missing Content type' }, { status: 400 });
    }

    //Log Request
    


    // Two Different Functionlities, multipart-form-data and application/json
    
    //Case 1: Application/JSON
    /*
        Structure is 
        {
            name : string,
            path: {
                //GEOJSON here
            }
        }
        
    */

    if(contentType.includes("application/json")){
        const body = await req.json();

        const name = body.name;
        const path = body.coordinates;

        if(!name || !path){
           // return NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 });
        }

        const geoJson : GeoJson = {
            coordinates:path
        };

        console.log(geoJson)

        //Check if the GeoJson is valid
        if(!geoJson.coordinates){
            return NextResponse.json({ message: 'Bad request, Invalid GeoJson' }, { status: 400 });
        }

        //Check if the coordinates are valid
        for(const entry of geoJson.coordinates){
            if(!entry.lat || !entry.long){
                return NextResponse.json({ message: 'Bad request, Invalid GeoJson' }, { status: 400 });
            }
        }

        //Now we can save the data to the database

        const collection = mongodb.db('elevation').collection('routes');

        // Now Enrich the Data with Elevation
        const enrichedGeoJson : GeoJsonWithElevation = {
            coordinates: []
        }

        for(const entry of geoJson.coordinates){
            const response = await fetch(`${elevationAPIURL}?locations=${entry.lat},${entry.long}`);
            const data = await response.json();
            const elevation = data.results[0].elevation;

            enrichedGeoJson.coordinates.push({
                lat: entry.lat,
                long: entry.long,
                elevation: elevation
            })
        }

        console.log(enrichedGeoJson)
        return NextResponse.json({ message: 'Success', data: enrichedGeoJson }, { status: 200 });

        const result = (await collection.insertOne({ name, path}))

        if(!result){
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }

        //Return With ID
        return NextResponse.json({ message: 'Success', id: result.insertedId }, { status: 200 });
    }



    // 2nd Scenario -> Mime type is multipart form data
    if(contentType.includes("multipart/form-data")){

        const formData = await req.formData();

        const name = formData.get('name');

        if(!name){
            return NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 });
        }

        const file = formData.get('path');

        if(!file){
            return NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 });
        }

        const reader = file.toString();

        const geoJson : GeoJson = JSON.parse(reader);

        //Check if the GeoJson is valid
        if(!geoJson.coordinates){
            return NextResponse.json({ message: 'Bad request, Invalid GeoJson' }, { status: 400 });
        }

        //Check if the coordinates are valid
        for(const entry of geoJson.coordinates){
            if(!entry.lat || !entry.long){
                return NextResponse.json({ message: 'Bad request, Invalid GeoJson' }, { status: 400 });
            }
        }
    }

    return NextResponse.json({ message: 'Bad request, Invalid Mime Type' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
    }

}




type ElevationRequestResposne = {
    id : string,
    name : string,
    path : GeoJsonWithElevation
}

type GeoJsonEntryWithElevation = {
    lat : number,
    long: number,
    elevation: number
}

type GeoJsonWithElevation = {
    coordinates: GeoJsonEntryWithElevation[]
}

export async function GET(req:NextRequest){
    //Get the ID from the URL
    
    //Just Return All FOr Now ...
    if(!process.env.MONGODB_URI){
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }

    const options : MongoClientOptions = {
        auth: {
            username: process.env.MONGODB_USER,
            password: process.env.MONGODB_PASSWORD
        },
        tls: true,
    }

    try {
        const mongodb :MongoClient = await MongoClient.connect(process.env.MONGODB_URI, options);

        const collection = mongodb.db('elevation').collection('routes');

        const result = (await collection.find({}).toArray());

        if(!result){
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Success', data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

