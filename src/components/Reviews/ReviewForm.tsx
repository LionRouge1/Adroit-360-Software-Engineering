import { useState, FormEvent } from 'react';
import Rating from 'react-rating';
import { IReviewForm } from '../../types/Review';

const ReviewForm = ({reviewData, handleSubmit, submitData}: IReviewForm) => {

  const { review, setReview } = reviewData;
  const { isSubmitting, setIsSubmitting } = submitData;

  const commentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      comment: value,
    }));
  };

  const ratingChange = (value: number) => {
    setReview((prevReview) => ({
      ...prevReview,
      rating: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="ration" className="form-label">Rate this Agent</label>
        <Rating                   // Allows half-star ratings
        onChange={(value) => ratingChange(value)} // Callback
        initialRating={review.rating}  // Initial rating
        className='form-control border-0'
      />
      </div>
      <div className="mb-3">
      <label htmlFor="comment" className='form-label'>Comment</label>
      <textarea
        value={review.comment}
        onChange={commentChange}
        id="comment"
        className='form-control'
      />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ReviewForm;