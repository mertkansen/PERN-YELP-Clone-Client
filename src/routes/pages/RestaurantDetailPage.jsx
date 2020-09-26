import React, { useEffect } from "react";
import { useStateValue } from "../../context/restaurantsContext";
import { actionTypes } from "../../context/reducer";
import { useParams } from "react-router-dom";
import { getRestaurantWithID } from "../../apis/helper";

import { AddReviews, Reviews, StarRating } from "../components/exports";

const RestaurantDetailPage = () => {
  // restaurant and reviews
  const [{ selectedRestaurant }, dispatch] = useStateValue();
  const { id } = useParams();

  useEffect(() => {
    getRestaurantWithID(id).then((res) =>
      dispatch({
        type: actionTypes.SET_SELECTED_RESTAURANTS,
        selectedRestaurant: res,
      })
    );
  }, [dispatch, id]);

  return (
    <div className="container">
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant?.restaurant.name}
          </h1>
          <div className="text-center">
            {selectedRestaurant.restaurant.count && <StarRating
              rating={selectedRestaurant?.restaurant.average_rating}
            />}
            <span className="text-warning ml-1">
              {selectedRestaurant?.restaurant.count
                ? `(${selectedRestaurant?.restaurant.count})`
                : "0 Reviews"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews
              key={selectedRestaurant.reviews.id}
              reviews={selectedRestaurant?.reviews}
            />
          </div>
          <AddReviews id={id} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
