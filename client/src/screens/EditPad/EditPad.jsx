import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { destroyPhoto } from "../services/pads";

import "./AddPad/AddPad.css";

export default function EditPad(props) {
  const { pads, handleUpdate } = props;
  const { id } = useParams();
  const [imageAdd, setImageAdd] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    rooms: 0,
    available_dates: "",
    private_bathroom: false,
    private_kitchen: false,
    location: "",
    photos_attributes: [],
  });

  const {
    name,
    rooms,
    available_dates,
    // private_kitchen,
    // private_bathroom,
    location,
    photos_attributes,
  } = formData;

  //prefills and sets photos so you can see what you have added so far
  useEffect(() => {
    const prefill = () => {
      const padData = pads.find((pad) => pad.id === Number(id));
      setFormData({
        private_bathroom: false,
        private_kitchen: false,
        name: padData.name,
        rooms: padData.rooms,
        available_dates: padData.available_dates,
        location: padData.location,
        photos_attributes: padData.photos,
      });
    };
    if (pads.length) {
      prefill();
    }
  }, [pads, id]);

  //generic handle change for the form
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  //delete request to the photos table
  const handlePhotoDelete = async (id) => {
    await destroyPhoto(id);
  };

  //Adds photos to the photos_attributes key, as a nested object in order for the backend to accept_nested_attributes
  //then resets the input to an empty string so the user can add another
  function handleImage(e) {
    setFormData((prevState) => ({
      ...prevState,
      photos_attributes: [...photos_attributes, { url: imageAdd }],
    }));
    setImageAdd("");
  }
  //checks the image to see if it has an ID, if an id exists its a photo url stored in the database, so we make a delete request
  //to the photos table, if not the photo was added in state and can be simply spliced out of state
  const deleteImage = (e) => {
    if (formData.photos_attributes[e.target.value].id) {
      handlePhotoDelete(formData.photos_attributes[e.target.value].id);
      formData.photos_attributes.splice(e.target.value, 1);
      setFormData({ ...formData });
    } else {
      formData.photos_attributes.splice(e.target.value, 1);
      setFormData({ ...formData });
    }
  };
  //adds a true boolean to the form in regards to a private kitchen
  function handleKitchen(e) {
    setFormData((prevState) => ({
      ...prevState,
      private_kitchen: e.target.checked,
    }));
  }
  //adds a true boolean to the form in regards to a private bathroom

  function handleBathroom(e) {
    setFormData((prevState) => ({
      ...prevState,
      private_bathroom: e.target.checked,
    }));
  }

  //displays the photos you have added so far
  const imageJSX = formData.photos_attributes?.map((photo, index) => (
    <div className="photo-container" key={index}>
      {photo ? (
        <>
          <img className="preview-image" src={photo.url} alt={`pad ${index}`} />
          <button value={index} onClick={deleteImage} type="button">
            Delete
          </button>
        </>
      ) : null}
    </div>
  ));

  //regex to check if valid image url
  const urlCheck = new RegExp(
    /\b(https?:\/\/\S+(?:png|jpe?g|gif|photo)\S*)\b/gim
  );

  //checks against regex and allows you to add if it passes.
  const checkImage = () => {
    if (urlCheck.test(imageAdd)) {
      return (
        <button className="photo-button" type="button" onClick={handleImage}>
          Add Image
        </button>
      );
    } else {
      return (
        <p className="taken-message">
          Please enter a valid image URL if you would like to add a photo
        </p>
      );
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3>Edit your pad</h3>
        <label>
          Name of Posting:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Beds:
          <input
            type="number"
            name="rooms"
            value={rooms}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Private Kitchen?
          <label>
            Yes
            <input
              type="checkbox"
              value={true}
              name="private_kitchen"
              onChange={(e) => handleKitchen(e)}
            ></input>
          </label>
        </label>
        <label>
          Private Bathroom?
          <label>
            Yes
            <input
              type="checkbox"
              value={true}
              name="private_bathroom"
              onChange={(e) => handleBathroom(e)}
            ></input>
          </label>
        </label>
        <label>
          Available Date:
          <input
            type="date"
            value={available_dates}
            name="available_dates"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Photos
          <input
            value={imageAdd}
            type="text"
            name="photo_attributes"
            onChange={(e) => setImageAdd(e.target.value)}
          ></input>
          {checkImage()}
        </label>
        <button className="submit-pad" type="submit">
          Edit Pad
        </button>
      </form>
      <p>Current photos:</p>
      {imageJSX}
    </div>
  );
}
