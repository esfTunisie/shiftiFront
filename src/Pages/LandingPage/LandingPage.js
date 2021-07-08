import React, { Component } from "react";
import { connect } from "react-redux";


import Navbar from '../../Components/Navbar/Navabar';
import MenuNav from "../../Components/Menu/Menu";
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="scroll-hide">
        <Navbar />
        <MenuNav />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);