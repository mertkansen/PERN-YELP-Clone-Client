import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, RDPage, UpdatePage } from "./routes";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurants/:id/update" component={UpdatePage} />
      <Route exact path="/restaurants/:id" component={RDPage} />
    </Switch>
  );
};

export default App;

// average_rating: "2.5"
// count: "8"
// id: "15"
// location: "Turkey"
// name: "Dürüminnnng again n again n again"
// price_range: 4
// restaurant_id: "15"