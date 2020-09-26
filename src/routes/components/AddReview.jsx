import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addReview } from "../../apis/helper";

const AddReview = ({ id }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((name.length > 0 && review.length > 0, rating >= 1 && rating <= 5)) {
      addReview(id, name, review, rating);

      window.location.reload();
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
        <button
          onClick={() => history.push("/")}
          className="btn btn-primary ml-1"
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default AddReview;
