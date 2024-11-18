import { FC, useState, useEffect } from "react"
import { IReview } from "../../types/Review";
import { IAgent } from "../../types/Agent";
import Rating from "react-rating";
import axios from "axios";
import { Link } from "react-router-dom";


const Reviews: FC<{ agent: IAgent }> = ({agent}) => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchAllReview = async () => {
      const response = await axios.get(`/agents/${agent.id}/reviews`);
      setReviews(response.data)
    };

    fetchAllReview();
  }, [])

  return(
    <>
      <h2>All the reviews</h2>
        <ul className="reviews overflow-auto list-unstyled mt-3" style={{width: '400px', maxHeight: '300px'}}>
      {
        reviews.map(({id, rating, comment}) => (
          <li className="review border mb-2" key={id}>
            <Rating
              initialRating={rating}
              stop={rating}
            />
            <p>{comment}</p>
          </li>
        ))
      }
    </ul>
    <Link to={`/agents/${agent.id}/reviews/create`} className="btn btn-primary">Write a review</Link>
    </>
  );
};

export default Reviews;