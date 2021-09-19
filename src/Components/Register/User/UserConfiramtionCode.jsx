import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col, Button, InputNumber } from 'antd';
import imageShifty from "../../../assets/img/Ellipse1.svg"
import imageShiftyJaune from "../../../assets/img/point-jaune.svg"
import point from "../../../assets/img/point2.svg"
import { apiURL } from "../../../Config/config";



const UserConfiramtionCode = (props) => {
    const arr =[];
    const [number1, setnumber1] = useState('')
    const [number2, setnumber2] = useState('')
    const [number3, setnumber3] = useState('')
    const [number4, setnumber4] = useState('')
    const [error, setError] = useState(false)
    const [fullNumber, setFullNumber] = useState(null)
    const [seconds, setSeconds] = React.useState(30);


    useEffect(() => {
        
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds(0);
          }
          
      }, [seconds]);
    const onChangeNumberOne=(value)=> {
        console.log("value",value.target);
        const NumberN1 = (value.target.validity.valid  ) ? value.target.value : number1;
        setnumber1(NumberN1)
    }
    const onChangeNumberTwo=(value)=> {
        const NumberN2 = (value.target.validity.valid) ? value.target.value : number2;
        setnumber2(NumberN2)
    }
    const onChangeNumberThree=(value)=> {
        const NumberN3 = (value.target.validity.valid) ? value.target.value : number3;
        setnumber3(NumberN3)
    }
    const onChangeNumberFoor=(value)=> {
        const NumberN4 = (value.target.validity.valid) ? value.target.value : number4;
        setnumber4(NumberN4)
        setFullNumber(number1+number2+number3+NumberN4)
    }

    const verifyCode =async()=>{
        let email = props.auth.username;
        let formdata = new FormData()
        formdata.append('email', email)
        formdata.append('code', fullNumber)
        const requestOptions = {
            method: 'POST',
            body: formdata
          };
          const data = await fetch(apiURL+"/verifyCodeUser", requestOptions);
          if(data.status == 200){
            const action = {type:"CHANGE_STEPS",steps:1}
            props.dispatch(action)
              window.location='/user'
          }
          if(data.status !== 200){
            setError('invalid code')
          }

    }
    
        return(
            <>
            <Row>
             <div className="blue-page-shifty">
                     <img className="blue-page-image" src={imageShifty} /> 
             </div>
             <div className="register-form-content">
                 <Row className="user-confirmation-code-title" >
                 <Col>
                    Confirmation 
                </Col>
                 </Row>
                
                <Row className="user-confirmation-code-sous-title">
                <Col>
                Un code vous a été envoyé par mail
                </Col>
                </Row>
                <Row className="user-confirmation-code-title-indication">
                    <Col>
                    Veuillez insérer le code
                    </Col>
                </Row>
                <Row className='block-input'>
                    <Col span={4} className='inputnumber-code'>
                    <input className='inputnumber-code' type="text" pattern="([0-9]*)"
                    maxlength="1"
                        onInput={onChangeNumberOne} value={number1} />
                    </Col>
                    <Col span={4} className='inputnumber-code'>
                    <input className='inputnumber-code' type="text" pattern="[0-9]*"
                    maxlength="1"
                        onInput={onChangeNumberTwo} value={number2} />
                    </Col>
                    <Col span={4} className='inputnumber-code'>
                    <input className='inputnumber-code' type="text" pattern="[0-9]*"
                    maxlength="1"
                        onInput={onChangeNumberThree} value={number3} />
                    </Col>
                    <Col span={4} >
                    <input className='inputnumber-code' type="text" pattern="[0-9]*"
                    maxlength="1"
                        onInput={onChangeNumberFoor} value={number4} />
                    </Col>
                </Row>
                <Row className='confirmation-error-message'>
                {error&&<div style={{color:'red'}}>{error}</div>}

                </Row>
                <Row className="user-confirmation-button-confimer-block">
                    <div className="user-confirmation-button-confirmer" style={!fullNumber && !fullNumber?{cursor:"not-allowed"}:null} onClick={fullNumber && fullNumber? verifyCode : null}>
                        <span>Confirmer</span>
                    </div>
                </Row>
                <Row className="user-confirmation-regener-code">
                    {seconds == 0 ? <div className="user-confirmation-code-allowed">
                        <span>Générer un nouveau code</span>
                    </div>: <div className="user-confirmation-code-disabled">
                        <span>Générer un nouveau code</span>
                    </div>}
                </Row>
                <Row className="user-confirmation-regener-code-message">
                    <div>
                        <span>Attendez {seconds} secondes pour pouvoir générer un nouveau code</span>
                    </div>
                </Row>
            </div>
            </Row>
            </>
            
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
      
export default connect(mapStateToProps, mapDispatchToProps)(UserConfiramtionCode);