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
import { connect } from "react-redux";
import UserConfiramtionCode from "../Components/Register/User/UserConfiramtionCode";
import UserEntreprise from "../Components/Register/User/UserEntreprise";
import BluePage from "../Components/Register/BluePage";
import DevenirPartenaire from "../Components/devenir partenaire/DevenirPartenaire";
import Contact from "../Pages/Contact";
import Choixtemplate from "../Components/Register/Profile/Choixtemplate";


const MainRoute = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/service" component={service} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/espace-client" component={EspaceClient} />
        <Route exact path="/template" component={Choixtemplate} />
        <Route exact path="/offre" component={Offre} />
        <Route exact path="/devenir-partenaire" component={DevenirPartenaire} />
        <PrivateRoute exact path="/user" isAuthenticated={props.auth.isLogIn} component={UserInforamtion} />
        <PrivateRoute exact path="/user-shop" isAuthenticated={props.auth.isLogIn} component={UserEntreprise} />
        <PrivateRoute exact path="/userVerification" isAuthenticated={props.auth.isLogIn} component={UserConfiramtionCode} />
        <PrivateRoute exact path="/user-profile" isAuthenticated={props.auth.isLogIn} component={BluePage} />
      </Switch>
    </Router>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (MainRoute);