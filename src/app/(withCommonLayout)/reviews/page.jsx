import { getAllReviews } from "@/Fetching/reviews";
import Link from "next/link";
import React from "react";

const ReviewsPage = async () => {
  const reviewData = await getAllReviews();
    const reviews = reviewData?.reviews || [];

    console.log(reviews);
    

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">Customer Reviews</h1>
          <p className="text-sm text-gray-500 mt-2">
            See what our customers are saying about our services
          </p>
        </div>

        <Link
          href={"/reviews/create-review"}
          className="bg-purple-400 py-2 px-4 rounded-xl mb-5 inline-block "
        >
          Create a Review
        </Link>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 border border-gray-100"
              >
                {/* Reviewer */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {review.name}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                                {review?.name} 
                    </h3>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-4 text-xs text-gray-800 font-semibold">
                  {review?.comment || ""}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-20">
            No reviews found
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
