export interface IReview {
  id: string;
  agentId: string
  rating: number;
  comment: string;
}

export interface IReviewDetails {
  rating: number;
  comment: string;
}

export interface IReviewForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reviewData: {review: IReviewDetails, setReview: React.Dispatch<React.SetStateAction<IReviewDetails>>};
  submitData: {isSubmitting: boolean, setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>};
}