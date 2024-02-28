"use client";

import React, { createContext, useState } from "react";
import { type Review } from "@/api/types";

const useReviewsState = (initialReviews: Review[]) =>
  useState<Review[]>(initialReviews);

export const ReviewContext = createContext<ReturnType<
  typeof useReviewsState
> | null>(null);

const ReviewProvider = ({
  children,
  initialReviews,
}: {
  children: React.ReactNode;
  initialReviews: Review[];
}) => {
  const [reviews, setReviews] = useReviewsState(initialReviews);

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
