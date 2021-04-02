import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "../../layouts/Layout/Layout";

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
    <div>
      <h1>Pads:</h1>
      {pads.map((pad) => (
        <>
          <Link key={pad.id} to={`/pads/${pad.id}`}>
            <div className="pad-container">
              <p>{pad.name}</p>
              <img src={pad.photos[0]?.url} />
              <p>Beds: {pad.rooms}</p>
              <p>Private Kitchen: {truthyKitchen(pad)}</p>
              <p>Private Bathroom: {truthyBathroom(pad)}</p>
              <p>Available: {pad.available_dates}</p>
            </div>
          </Link>
          {currentUser && currentUser.id === pad.user.id ? (
            <>
              <Link to={`/pads/${pad.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(pad.id)}>Delete</button>
            </>
          ) : (
            <a href={`mailto: ${pad.user.email}`}>
              <button>Book</button>
            </a>
          )}
        </>
      ))}
    </div>
  );
}
