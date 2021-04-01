import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    private_kitchen,
    private_bathroom,
    location,
    photos_attributes,
  } = formData;
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
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleImage(e) {
    setFormData((prevState) => ({
      ...prevState,
      photos_attributes: [...photos_attributes, { url: imageAdd }],
    }));
    setImageAdd("");
  }
  const deleteImage = (e) => {
    formData.photos_attributes.splice(e.target.value, 1);
    setFormData({ ...formData });
  };

  function handleKitchen(e) {
    setFormData((prevState) => ({
      ...prevState,
      private_kitchen: e.target.checked,
    }));
  }
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

  //checks against regex and allows you to add if it passes, or not if it doesn't.
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
      {imageJSX}
      <button type="submit">Edit Pad</button>
    </form>
  );
}
