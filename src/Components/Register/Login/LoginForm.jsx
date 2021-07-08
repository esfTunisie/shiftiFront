import React, { Component } from "react";
import { connect } from "react-redux"
import BluePage from "../BluePage";
import RegisterForm from "../registerForm";
import { Input, Row, Col } from 'antd';


class LoginPage extends Component {
  
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
                <BluePage register={false} login={true} userInformation={false} />
                <RegisterForm register={false} login={true} userInformation={false} />  
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);