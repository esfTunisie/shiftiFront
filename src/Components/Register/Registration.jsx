import React, { Component } from "react";
import { connect } from "react-redux"
import BluePage from "./BluePage";
import RegisterForm from "./registerForm";
import { Input, Row, Col } from 'antd';
import LoginForm from "./Login/LoginForm";

class Registration extends Component {
  
    constructor(props) {
      super(props);
      this.state = {

      };  
    }
    
    componentDidMount(){

    }

    render() {
     
        return (
            <Row>
                <BluePage userInformation={false} register={true} login={false} />
                <RegisterForm userInformation={false} register={true} login={false} />  
                {/* <LoginForm login={false} /> */}
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);