//import useState hook to create menu collapse state
import React, { useState } from "react";
import { connect } from 'react-redux'
import imageShifty from "../../assets/img/Ellipse1.svg"
import imageShiftyPoint from "../../assets/img/1.svg"
import { Input, Row, Col, Button } from 'antd';
import imageShiftyLogin from "../../assets/img/imageLogin.png"




const BluePage = (props) => {
    const [steps, setSteps] = useState(1)
    const stepsProps = props.auth.steps
    const changeStepsOne =()=>{
        setSteps(1);
        const action = {type:"CHANGE_STEPS",steps:steps}
        props.dispatch(action)
    }
    const changeStepsTwo =()=>{
        setSteps(2);
        const action = {type:"CHANGE_STEPS",steps:steps}
        props.dispatch(action)
    }
    const changeStepsThree =()=>{
        setSteps(3);
        const action = {type:"CHANGE_STEPS",steps:steps}
        props.dispatch(action)
    }
    console.log(props);
    if(props.register)
    {
        return (
            <div  className="blue-page-shifty">
                    <img className="blue-page-image" src={imageShifty} />
            </div>
            );
        };
    
    if(props.login)
    {
        return (
            <div  className="blue-page-shifty">
                     
                    <img className="blue-page-image" src={imageShifty} />
            </div>
            );
        };
    
    if(props.userInformation)
    {
       if(stepsProps == 1){
        return(
            <div  className="blue-page-shifty">
                <div className="content-blue-page">
                <Row className="user-rubrique-selected">
                   <Col onClick={changeStepsOne}> Information et coordonnées</Col>
                </Row>
                
                <Row className="user-rubrique" onClick={changeStepsTwo}>
                    Paramétre
                </Row>
                <Row className="user-rubrique" onClick={changeStepsThree}>
                    Magasin
                </Row>
                </div>
            </div>
        );
       }
       if(stepsProps == 2){
        return(
            <div  className="blue-page-shifty">
                <div className="content-blue-page">
                <Row className="user-rubrique" onClick={changeStepsOne}>
                    Information et coordonnées
                </Row>
                <Row className="user-rubrique-selected" onClick={changeStepsTwo}>
                    Paramétre
                </Row>
                <Row className="user-rubrique" onClick={changeStepsThree}>
                    Magasin
                </Row>
                </div>
            </div>
        );
       }
       if(stepsProps == 3){
        return(
            <div  className="blue-page-shifty">
            <div className="content-blue-page">
            <Row className="user-rubrique" onClick={changeStepsOne}>
                Information et coordonnées
            </Row>
            <Row className="user-rubrique" onClick={changeStepsTwo}>
                Paramétre
            </Row>
            <Row className="user-rubrique-selected" onClick={changeStepsThree}>
                Magasin
            </Row>
            </div>
        </div>
    
        );
       }
        
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
      
export default connect(mapStateToProps, mapDispatchToProps)(BluePage);