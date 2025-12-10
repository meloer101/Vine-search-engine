import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

export const Search = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/Search" />
        </Route>
        
        <Route exact path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};
