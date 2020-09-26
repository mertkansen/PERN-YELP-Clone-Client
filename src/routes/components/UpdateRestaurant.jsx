import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useStateValue } from "../../context/restaurantsContext";
import { updateRestaurant, getRestaurantWithID } from "../../apis/helper";

const UpdateRestaurant = () => {
  const [, dispatch] = useStateValue();
  const { id } = useParams();
  const history = useHistory();

  const [chosenRestau, setChosenRestau] = useState({});
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    getRestaurantWithID(id, dispatch).then((res) => setChosenRestau(res));
  }, [dispatch, id]);


  const handlePriceRange = (e) => {
    const { value } = e.target;
    if (value >= 1 && value <= 5) {
      setPriceRange(value);
    } else {
      setPriceRange(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((name.length > 0 && location.length > 0 && priceRange)) {
      updateRestaurant(dispatch, id, name, location, priceRange);

      history.push("/");
    }
  };

  return (
    <div className="mb-4 container">
      <h1>{chosenRestau?.name}</h1>
      <form action="submit">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            placeholder={chosenRestau?.name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            placeholder={chosenRestau?.location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={handlePriceRange}
            id="price_range"
            type="number"
            className="form-control"
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
