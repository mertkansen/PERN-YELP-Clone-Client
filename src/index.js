import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Context
import { RestaurantsContextProvider as RSProvider } from "./context/restaurantsContext";
import reducer, { initialState } from "./context/reducer";

render(
  <RSProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
  </RSProvider>,
  document.getElementById("mertkan")
);
