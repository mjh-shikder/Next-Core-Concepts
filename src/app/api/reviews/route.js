import { dbConnect } from "@/lib/dbConnect";

export const reviewsData = [
    {
        id: 1,  
        serviceId: 1,
        reviewer: "John Doe",
        rating: 4,
    },

    {
        id: 2,
        serviceId: 2,
        reviewer: "Jane Smith",
        rating: 5,
    },
    {
        id: 3,
        serviceId: 1,
        reviewer: "Alice Johnson",
        rating: 3,
    },
    {
        id: 4,
        serviceId: 3,
        reviewer: "Bob Brown",
        rating: 4,
    },
    {
        id: 5,
        serviceId: 2,
        reviewer: "Charlie Davis",
        rating: 5,
    },
];

// POST API
export async function POST(request) {
    const newReview = await request.json();
    const reviewsRes = await dbConnect("reviews")
   const res = await reviewsRes.insertOne(newReview);

    return Response.json({
        message: "Review Added Successfully",
        review: res,
    })
}

// GET API (connected with db)
export async function GET(request) {
    const reviewsRes = await dbConnect("reviews")
    const reviews = await reviewsRes.find({}).toArray();
    return Response.json({ reviews, message: "Getting Reviews successfully" });
}