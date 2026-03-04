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


// PATCH
export async function PATCH(request, { params }) {

    const { id } = await params;
    const data = await request.json();

    if (id.length != 24) { return Response.json({ message: "id is not valid" }) }

    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: data, 
    }
    
    const reviewsRes = await dbConnect("reviews")
    const review = await reviewsRes.updateOne(filter, updateDoc)


    return Response.json({ review, message: "Item Edited Successfully " });
}




// DELETE
export async function DELETE(request, { params }) {

    const { id } = await params;

    if (id.length != 24) { return Response.json({ message: "id is not valid" }) }

    const filter = { _id: new ObjectId(id) };
   

    const reviewsRes = await dbConnect("reviews")
    const review = await reviewsRes.deleteOne(filter)


    return Response.json({ review, message: "Item Deleted Successfully " });
}
