import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes/routes";

export const Sidebar = () => {
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.sidebar />}
          />
        ))}
      </Switch>
    </>
  );
};
