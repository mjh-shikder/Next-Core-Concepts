export async function GET(Request) {

    const data = {
        name: "Cleanify",
        description: "Car Washing System",
        version: "1.0.0",
    }
    
    return Response.json({data });
}