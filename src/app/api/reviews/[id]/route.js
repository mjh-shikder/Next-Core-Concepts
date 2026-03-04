import { reviewsData } from "../route";

// GET Single Item 
export async function GET(request, {params}) {

    const { id } = await params;
    console.log(id, "from single item");
    
    const reviw = reviewsData.find(fd => fd.id === parseInt(id) );

    return Response.json({reviw , message: "single item getting "});
}