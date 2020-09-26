import React, { useState } from "react";
import { useStateValue } from "../../context/restaurantsContext";
import { addRestaurant } from "../../apis/helper";

const AddRestaurant = () => {
  const [, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const cleanUp = () => {
    setName("");
    setLocation("");
    setPriceRange("Price Range");
  };

  const addRestau = async (e) => {
    e.preventDefault();

    if (priceRange !== "Price Range") {
      await addRestaurant(dispatch, name, location, priceRange);

      cleanUp();
    }
  };

  return (
    <div className="mb-4 container">
      <form action="submit">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button onClick={addRestau} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
