import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navabar from "../../Components/Navbar/Navabar";


const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      <div>
        <Navabar />
        <Component {...props} />
        
      </div>
    }
  />
);

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

export default connect(mapStateToProps, mapDispatchToProps) (PublicRoute);