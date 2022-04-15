import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdmindashBoard from "./user/AdminDashBoard";
import UserDashBoard from "./user/UserDashBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <AdminRoute path="/admin/dashboard" exact component={AdmindashBoard} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
