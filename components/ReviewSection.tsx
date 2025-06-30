"use client";

import React from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Amit Singh",
    rating: 5,
    comment: "Radiant Hospital provides excellent treatment and the staff is very caring.",
  },
  {
    name: "Ravi Kumar",
    rating: 5,
    comment: "Best hospital in Gorakhpur. The ICU ward saved my father's life.",
  },
  {
    name: "Sunita Verma",
    rating: 4,
    comment: "Doctors and nurses are very supportive. Good experience overall.",
  },
  {
    name: "Manoj Yadav",
    rating: 5,
    comment: "Affordable treatment with quality care. Highly recommended!",
  },
  {
    name: "Neha Tiwari",
    rating: 5,
    comment: "Emergency services are very prompt. Staff is cooperative and helpful.",
  },
  {
    name: "Deepak Mishra",
    rating: 4,
    comment: "Good facilities, especially the ICU ward and diagnostic services.",
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">What Our Patients Say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-yellow-50 border border-yellow-200 p-4 rounded shadow"
          >
            <p className="font-semibold mb-1">{review.name}</p>
            <p className="text-yellow-600 text-sm mb-2">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
