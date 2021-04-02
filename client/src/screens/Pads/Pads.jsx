import { Link } from "react-router-dom";

import "./Pads.css";

export default function Pads(props) {
  const truthyKitchen = (pad) => {
    if (pad.private_kitchen === true) {
      return <>Yes</>;
    } else {
      return <>No</>;
    }
  };
  const { pads, handleDelete, currentUser } = props;
  const truthyBathroom = (pad) => {
    if (pad.private_bathroom === true) {
      return <>Yes</>;
    } else {
      return <>No</>;
    }
  };
  return (
    <div className="all-pads">
      <h1>Pads:</h1>
      {pads.map((pad) => (
        <div className="pad-container" key={pad.id}>
          <h2>{pad.name}</h2>
          <img alt="house" src={pad.photos[0]?.url} />
          <p>Beds: {pad.rooms}</p>
          <p>Private Kitchen: {truthyKitchen(pad)}</p>
          <p>Private Bathroom: {truthyBathroom(pad)}</p>
          <p>Available: {pad.available_dates}</p>
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
