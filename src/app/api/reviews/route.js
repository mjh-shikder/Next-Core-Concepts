const reviewsData = [
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

export async function POST(request) {
    const newReview = await request.json();
    console.log(newReview);
    reviewsData.push({ ...newReview, id: reviewsData?.length + 1 });
    return Response.json({
        message: "Review Added Successfully",
        review: newReview,
    })
}

export async function GET(request) {
 
    return Response.json({ reviewsData });
}