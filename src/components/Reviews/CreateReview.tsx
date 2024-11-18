import { useState } from "react";
import { IReviewDetails } from "../../types/Review";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAgent } from "../../hooks/useAgent";
import ReviewForm from "./ReviewForm";


const CreateReview = () => {
  const { id } = useParams<{ id: string }>();
  const { agent, loading } = useAgent(id as string);

  const [review, setReview] = useState({} as IReviewDetails);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const reviewData = { ...review, AgentId: agent?.id }
      console.log(reviewData);
      axios.post('/reviews', { reviewData })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    finally {
      setIsSubmitting(false);
    };
  };

  if (loading) return <h2>Loading...</h2>;
  if (!agent) return <h2>Agent not found</h2>;

  return (
    <div>
      <h2>Review {agent?.firstName}</h2>
      <ReviewForm
        reviewData={{ review, setReview }}
        handleSubmit={handleSubmit}
        submitData={{ isSubmitting, setIsSubmitting }}
      />
    </div>
  );
};

export default CreateReview;