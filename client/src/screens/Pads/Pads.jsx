import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

import "./Pads.css";

export default function Pads(props) {
  const biggerThan600 = useMediaPredicate("(min-width: 600px)");

  const { pads, handleDelete, currentUser } = props;
  const queriedPads = pads.filter((pad) =>
    pad.location.toLowerCase().includes(props.search.toLowerCase())
  );

  const truthyKitchen = (pad) => {
    if (pad.private_kitchen === true) {
      return <>Yes</>;
    } else {
      return <>No</>;
    }
  };
  const truthyBathroom = (pad) => {
    if (pad.private_bathroom === true) {
      return <>Yes</>;
    } else {
      return <>No</>;
    }
  };
  return (
    <div className="all-pads">
      <h1>{props.search}</h1>
      {queriedPads.reverse().map((pad) => (
        <div className="pad-container" key={pad.id}>
          <h2>{pad.name}</h2>
          <img alt="house" src={pad.photos[0]?.url} />
          <p>Location: {pad.location}</p>
          <p>Beds: {pad.rooms}</p>
          <p>Private Kitchen: {truthyKitchen(pad)}</p>
          <p>Private Bathroom: {truthyBathroom(pad)}</p>
          <p>Available: {pad.available_dates}</p>
          {biggerThan600 && (
            <p className="recent-review">
              Most Recent Review: {pad.reviews[pad.reviews.length - 1]?.content}
            </p>
          )}
          <Link to={`/pads/${pad.id}`}>
            <button className="reviews-button">Reviews</button>
          </Link>
          {currentUser && currentUser.id === pad.user.id ? (
            <>
              <Link to={`/pads/${pad.id}/edit`}>
                <button className="edit-button">Edit</button>
              </Link>
              <button
                className="delete-button"
                onClick={() => handleDelete(pad.id)}
              >
                Delete
              </button>
            </>
          ) : (
            <a href={`mailto: ${pad.user.email}`}>
              <button className="book-button">Book</button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
