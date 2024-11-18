import { useEffect, useState } from "react";
import axios from "axios";
import { IReview } from "../types/Review";

export const useReview = (id: string) => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchAllReview = async () => {
      const response = await axios.get('/agent/:id/reviews');
      setReviews(response.data)
    };

    fetchAllReview();
  }, [reviews])

  return reviews
}