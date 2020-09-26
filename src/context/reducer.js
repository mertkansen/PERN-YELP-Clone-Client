export const initialState = {
  restaurants: [],
  selectedRestaurant: null,
};

export const actionTypes = {
  SET_RESTAURANTS: "SET_RESTAUX",
  SET_SELECTED_RESTAURANTS: "SET_SELECTED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
    case actionTypes.SET_SELECTED_RESTAURANTS:
      return {
        ...state,
        selectedRestaurant: action.selectedRestaurant,
      };
    default:
      return state;
  }
};

export default reducer;
