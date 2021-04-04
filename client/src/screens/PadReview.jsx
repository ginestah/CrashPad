import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePad } from "../services/pads";
import { destroyReview } from "../services/reviews";

import "./PadReview.css";

export default function PadReview(props) {
  const { id } = useParams();
  const [singlePad, setSinglePad] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getPad = async () => {
      const padData = await getOnePad(id);
      setSinglePad(padData);
    };
    getPad();
  }, [toggle, id]);

  const handleDelete = async (id) => {
    await destroyReview(id);
    setToggle(!toggle);
  };

  return (
    <div className="review-container">
      <h1 className="pad-title">{singlePad?.name}</h1>
      <img
        className="review-photos"
        alt="house of pad being reviewed"
        src={singlePad?.photos[0]?.url}
      />
      <div className="review-container-two">
        <p>Reviews:</p>

        {singlePad?.reviews.length > 0 ? (
          singlePad?.reviews.map((review) => (
            <div className="review">
              <p className="review-content">{review.content}</p>
              <p>By: {review.user.username}</p>
              {props.currentUser && props.currentUser.id === review.user_id ? (
                <button
                  className="reviews-button"
                  onClick={() => handleDelete(review.id)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))
        ) : (
          <p>No Reviews yet</p>
        )}
        <Link to={`/pads/reviews/add/${singlePad?.id}`}>
          <button className="reviews-button">Add Review</button>
        </Link>
      </div>
    </div>
  );
}
