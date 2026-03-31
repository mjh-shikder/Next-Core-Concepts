"use server"

// Getting All Reviews
export const getAllReviews = async (searchParams) => {
    const getParams = new URLSearchParams(searchParams).toString();
    console.log(getParams);

    const res = await fetch(`${process.env.NEXT_URL}/api/reviews?${getParams}`, {
        cache: "force-cache", // default: no-store
    });

    const data = await res.json();
    return data;
    
}


// Create Review
export const createReviews = async (data) => {

    const res = await fetch(`${process.env.NEXT_URL}/api/reviews?`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)
        }
    );

    if (!res.ok) {
        throw new Error("Failed to Create review")
    }
    
    return res.json();
    
}