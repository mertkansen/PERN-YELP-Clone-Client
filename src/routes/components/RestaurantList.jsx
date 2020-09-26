import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/restaurantsContext";
import { getAll, deleteRestaurant } from "../../apis/helper";
import { StarRating } from "./exports";
/*
  average_rating: "3.0"
count: "5"
id: "49"
location: "sdasd"
name: "asd"
price_range: 3
restaurant_id: "49"
*/

const RestaurantList = () => {
  const [{ restaurants }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    getAll(dispatch);
  }, [dispatch]);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteRestaurant(id, dispatch);
  };

  const renderRating = ({ count, average_rating }) => (
    <>
      {count && <StarRating rating={average_rating} />}
      <span className="text-warning ml-1">({count ? count : "0 Reviews"})</span>
    </>
  );

  return (
    <div style={{ overflowY: "scroll", height: "100vh" }} className="container">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurants</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants?.map(
            ({ name, location, price_range, id, average_rating, count }) => (
              <tr onClick={(e) => history.push(`/restaurants/${id}`)} key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{"$".repeat(price_range)}</td>
                <td>{renderRating({ average_rating, count })}</td>
                <td>
                  <button
                    onClick={(e) => handleUpdate(e, id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
