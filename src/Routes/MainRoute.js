import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EspaceClient from "../Pages/EspaceClient/EspaceClient"
import Template from "../Pages/Template/Template"
import Offre from "../Pages/Offre/Offre"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Registration from "../Components/Register/Registration"
import LoginPage from "../Components/Register/Login/LoginForm"
import UserInforamtion from "../Components/Register/User/UserInforamtion";
import service from "../Components/Service/service";


const MainRoute = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/loginPage" component={LoginPage} />
        <PrivateRoute exact path="/service" component={service} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/espace-client" component={EspaceClient} />
        <Route exact path="/template" component={Template} />
        <Route exact path="/offre" component={Offre} />
        {props.auth && props.auth.token?<PrivateRoute exact path="/user" component={UserInforamtion} />: <Redirect to="/loginPage"></Redirect>}
      </Switch>
    </Router>
  );
};

export default MainRoute;