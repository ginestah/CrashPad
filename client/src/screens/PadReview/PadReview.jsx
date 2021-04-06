import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePad } from "../../services/pads";
import { destroyReview } from "../../services/reviews";

import "./PadReview.css";

export default function PadReview(props) {
  const { id } = useParams();
  const [singlePad, setSinglePad] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const getPad = async () => {
      const padData = await getOnePad(id);
      setSinglePad(padData);
      setPics(padData.photos);
    };
    getPad();
  }, [toggle, id]);

  const handleDelete = async (id) => {
    await destroyReview(id);
    setToggle(!toggle);
  };
  const switchPic = (index) => {
    let temp = pics;
    const featured = temp.splice(index, 1);
    temp = featured.concat(temp);
    setPics(temp);
  };
  const imgJSX = pics?.map((image, index) => {
    if (index > 0) {
      return (
        <img
          className="image-thumbnail"
          src={image.url}
          alt={`house ${index + 1}`}
          key={index}
          onClick={() => switchPic(index)}
        />
      );
    }
    return null;
  });
  //got a the image/thumbnail code from classmates code @ https://github.com/arbayer4/car-app
  return (
    <div className="review-container">
      <h1 className="pad-title">{singlePad?.name}</h1>
      <div className="img-container">
        <img className="image-main" src={pics[0]?.url} alt="" />
        <div className="image-thumbnail-box">{imgJSX}</div>
      </div>
      <div className="review-container-two">
        <p>Reviews:</p>

        {singlePad?.reviews.length > 0 ? (
          singlePad?.reviews.map((review) => (
            <div key={review.id} className="review">
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
