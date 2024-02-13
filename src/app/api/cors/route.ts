type RequestBody = {
    endpoint : string;
    method : string;
    headers : string
    origin : string;
    credentials : string;
}

type ResponseBody = {
    Allowed_Headers : string;
    Allowed_Methods : string;
    Allowed_Origisn : string;
    Allowed_Credentials : string;
    Simple : boolean;
    Allowed : boolean;
}

import { NextResponse, NextRequest } from 'next/server';

 async function GET(req: NextRequest) {
    //res.status(405).json({ message: 'Method not allowed' });
    //res.write("Method not allowed");
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    //return;
}

export  async function POST(req: NextRequest) {

    const data = await  req.json();
    const { endpoint, method, headers, origin, credentials } = data

    if (!endpoint || !origin || !method) {
        return NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 });
        return;
    }
    
    
    
    //Ensure the Format is Okay for the Headers, Separated by a comma
    /*const methodArray = headers.replace(" ","").split(",");

    //Ensure the Format is Okay for the Methods, Separated by a comma
    /methodArray.forEach((header) => {
        //EIther GET, POST, PUT, DELETE, PATCH,  HEAD
        //Lower case or Upper Case
        if (!/^(GET|POST|PUT|DELETE|PATCH|HEAD)$/i.test(header)) {
            res.status(400).json({ message: 'Bad request' });
            return;
        }   
    })

    // Test if Simple Request Or Not

    //Check if All Methods Are Okay for Simple Request
    const simple = methodArray.every((header) => {
        return /^(GET|POST|HEAD)$/i.test(header);
    });*/

    //NVM, Method Will Only Be a Single Method
    //Check if Method is Okay for Simple Request

    let simple = true;

    if (!/^(GET|POST|HEAD)$/i.test(method)) {
        simple = false;
    }

    const headerArray = headers.replace(" ","").split(",");

    //Check if All Headers Are Okay for Simple Request
    // Accept, Accept-Language, Content-Language, Content-Type
    
    headerArray.forEach((header:string) => {
        if (!/^(Accept|Accept-Language|Content-Language|Content-Type)$/i.test(header)) {
            simple = false;
        }
    })

    if(credentials === "true"){
        simple = false;
    }

    if(simple){

        try {
        //Attempt CORS Request
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                "Origin": origin,
            }
        });

        const allowedOrigin = response.headers.get('Access-Control-Allow-Origin');
        const allowedHeaders = response.headers.get('Access-Control-Allow-Headers');
        const allowedMethods = response.headers.get('Access-Control-Allow-Methods');

        if(allowedOrigin === origin || allowedOrigin === "*"){

            return NextResponse.json({
                Allowed_Headers : allowedHeaders,
                Allowed_Methods : allowedMethods,
                Allowed_Origin : allowedOrigin,
                Allowed_Credentials : "",
                Simple : true
            });
        }

        } catch (error) {
            return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
        }

        }

    else {



        // Create an object with your headers and a default string value


        try {
        //Attempt CORS Request
        const response = await fetch(endpoint, {
            method: "OPTIONS",
            headers: {
                "Origin": origin,
                "Access-Control-Request-Method": method,
                "Access-Control-Request-Headers": headers,
            }
        });


        console.log(endpoint);
        console.log(response.headers)

        const allowedOrigin = response.headers.get('Access-Control-Allow-Origin');
        const allowedHeaders = response.headers.get('Access-Control-Allow-Headers');
        const allowedMethods = response.headers.get('Access-Control-Allow-Methods');
        const allowedCredentials = response.headers.get('Access-Control-Allow-Credentials');

        let allowed = false;
        if(allowedOrigin === origin || allowedOrigin === "*"){
            allowed = true;
        }

        return NextResponse.json({
            Allowed_Headers : allowedHeaders,
            Allowed_Methods : allowedMethods,
            Allowed_Origin : allowedOrigin,
            Allowed_Credentials : allowedCredentials,
            Simple : false,
            Allowed : allowed
        });


        } catch (error) {
            return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
        }
    }
    
}
