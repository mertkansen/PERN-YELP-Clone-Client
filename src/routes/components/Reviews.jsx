import React from "react";
import { StarRating } from "./exports";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews?.map(({ id, restaurant_id, name, review, rating }) => (
        <div
          key={id}
          className="card text-white bg-primary mb-3 mr-4"
          style={{ maxWidth: "30%" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>{name}</span>
            <span>
              <StarRating rating={rating} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">{review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
