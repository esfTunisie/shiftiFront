import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col, Button } from 'antd';
import BluePage from "../BluePage";
import RegisterForm from "../registerForm";


const UserInformation = (props) => {
    console.log(props);
  
        return(
       
            <Row>
                <BluePage userInformation={true} login={false} register={false} />
                <RegisterForm userInformation={true} login={false} register={false} />
            </Row>
        )


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
      
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);