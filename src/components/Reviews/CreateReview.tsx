import { useState, useContext } from "react";
import { IReviewDetails } from "../../types/Review";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAgent } from "../../hooks/useAgent";
import ReviewForm from "./ReviewForm";
import { MessageContext } from "../../contexts/MessageContext";


const CreateReview = () => {
  const { id } = useParams<{ id: string }>();
  const { agent, loading } = useAgent(id as string);
  const { setMessage } = useContext(MessageContext);

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
          setMessage({ message: 'Review created successfully', type: 'success' });
        })
        .catch((error) => {
          setMessage({ message: 'Error creating review', type: 'danger'});
        });
    }
    finally {
      setReview({
        rating: 0,
        comment: ''
      });
      setIsSubmitting(false);
    };
  };

  if (loading) return <h2>Loading...</h2>;
  if (!agent) return <h2>Agent not found</h2>;

  return (
    <div className="container" style={{width: '50%'}}>
      <h2>Review {agent?.firstName}</h2>
      <ReviewForm
        reviewData={{ review, setReview }}
        handleSubmit={handleSubmit}
        submitData={{ isSubmitting, setIsSubmitting }}
      />
      <br /> 
      <Link to={`/agents/${agent.id}`} className="btn btn-outline-primary">&larr; Back</Link>
    </div>
  );
};

export default CreateReview;