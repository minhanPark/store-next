import { ReviewContext } from "@/app/providers/ReviewsContext";
import React from "react";

export const useReviews = () => {
  const reviews = React.useContext(ReviewContext);
  if (!reviews) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return reviews;
};
