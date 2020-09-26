import axios from "../apis/restaurantFinder";
import { actionTypes } from "../context/reducer";

export const getAll = async (dispatch) => {
  try {
    await axios.get("/").then((res) =>
      dispatch({
        type: actionTypes.SET_RESTAURANTS,
        restaurants: res.data.data.restaurants.reverse(),
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const addRestaurant = async (dispatch, name, location, priceRange) => {
  try {
    return await axios.post("/", {
      name,
      location,
      price_range: priceRange,
    });
  } catch (err) {
    console.log(err);
  } finally {
    getAll(dispatch);
  }
};

export const updateRestaurant = async (
  dispatch,
  id,
  name,
  location,
  priceRange
) => {
  try {
    return await axios.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
  } catch (err) {
    console.log(err);
  } finally {
    getAll(dispatch);
  }
};
export const deleteRestaurant = async (id, dispatch) => {
  try {
    return await axios.delete(`/${id}`);
  } catch (err) {
    console.log(err);
  } finally {
    getAll(dispatch);
  }
};

export const getRestaurantWithID = async (id) => {
  try {
    let restaurant;
    let reviews;

    await axios.get(`/${id}`).then((res) => {
      reviews = res.data.data.reviews;
      restaurant = res.data.data.restaurant;
    });

    return { restaurant, reviews };
  } catch (err) {
    console.log(err);
  }
};

export const addReview = async (id, name, review, rating) => {
  try {
    const results = await axios.post(`/${id}/addReview`, {
      name,
      review,
      rating,
    });
    return results;
  } catch (err) {
    console.log(err);
  }
};
