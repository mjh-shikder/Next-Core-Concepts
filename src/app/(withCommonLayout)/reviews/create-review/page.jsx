"use client";

import Container from "@/components/shared/Container";
import { useState } from "react";
import { Star, Send } from "lucide-react";
import Rating from "react-rating";
import { createReviews } from "@/Fetching/reviews";

const CreateReviewPage = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const comment = form.comment.value;

    const reviewData = {
      name,
      rating,
      comment,
      createdAt: new Date(),
      };
      
      const res = await createReviews(reviewData);
      if (res?.message) {
          alert(res.message || "Review Submit Successfully!");
      }

    console.log("Review Submitted:", reviewData);

    // reset form
    form.reset();
    setRating(0);
  };

  return (
    <Container>
      <div className="max-w-xl mx-auto bg-base-100 p-6 rounded-2xl shadow-md bg-gray-900 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Leave a Review</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full bg-gray-800 py-2 px-2 rounded-xl"
          />

          {/* Rating */}
          <div>
            <p className="mb-1 font-medium">Your Rating</p>

            <Rating
              initialRating={rating}
              onChange={(value) => setRating(value)}
              emptySymbol={<Star className="w-6 h-6 text-gray-300" />}
              fullSymbol={
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 " />
              }
            />
          </div>

          {/* Comment */}
          <textarea
            name="comment"
            placeholder="Write your review..."
            required
            className="textarea textarea-bordered w-full bg-gray-800 py-2 px-2 rounded-xl"
            rows={4}
          />

          {/* Submit */}
          <button
            type="submit"
            className="btn bg-purple-400 py-2 rounded-xl  w-full flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Submit Review
          </button>
        </form>
      </div>
    </Container>
  );
};

export default CreateReviewPage;
