import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { createReview } from "../services/reviews";

export default function AddReview(props) {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    content: "",
    pad_id: Number(id),
    user_id: Number(props.currentUser?.id),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (formData) => {
    await createReview(Number(id), formData);
    history.push(`/pads/${id}`);
  };
  return (
    <div>
      <h2>Add Review:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <textarea
          rows={10}
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button className="reviews-button submit-review" type="submit">
          Add Review
        </button>
      </form>
    </div>
  );
}
