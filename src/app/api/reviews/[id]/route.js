import { ObjectId } from "mongodb";
import { reviewsData } from "../route";
import { dbConnect } from "@/lib/dbConnect";

// GET Single Item 
export async function GET(request, { params }) {

    const { id } = await params;
    
    if (id.length != 24) { return Response.json({ message: "id is not valid" }) }
    
    const reviewsRes = await dbConnect("reviews")
    const review = await reviewsRes.findOne({_id: new ObjectId(id)})


    return Response.json({ review, message: "single item getting " });
}