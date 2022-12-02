import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import GoalForm from "./pages/Form";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Nova_Meta" exact component={GoalForm} />
      <Route path="/Editar_Meta/:id" exact component={GoalForm} />
    </Switch>
  );
};

export default Routes;
