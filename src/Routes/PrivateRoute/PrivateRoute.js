import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    
  <Route
    {...rest}
    render={(props) =>(
        console.log("props",rest.isAuthenticated),
        rest.isAuthenticated === true ?
        <Component {...props}  />
        : <Redirect to='/loginPage' />
    )         
    }
  /> 
)


PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps) (PrivateRoute);