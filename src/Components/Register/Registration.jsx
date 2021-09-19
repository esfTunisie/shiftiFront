import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import BluePage from "./BluePage";
import RegisterForm from "./registerForm";
import { Input, Row, Col, notification, Button, Alert, Form } from 'antd';
import LoginForm from "./Login/LoginForm";
import { apiURL } from "../../Config/config";
import isEmail from "validator/lib/isEmail";
import { SmileOutlined } from '@ant-design/icons';
import imageShifty from "../../assets/img/Ellipse1.svg"


const Registration =(props)=>{
    
  const [step, setStep] = useState({nomPrenom:'',email:'',password:'', confirmPassword:'', validation:{error:[true,true,true, true], errorMsg:["required","required","required", "required"]}});
  const [stepError, setStepError] = useState([true,true,true, true]);
  const [stepErrorMsg, setstepErrorMsg] = useState(['','','', '']);
  const [existEmail, setExistEmail] = useState(false);

  const openNotification = () => {
    notification.success({
      duration: null,
      message: 'Success',
      description:
        'Félicitations ! compte crée',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const getTokenUser =async()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "username": step.email,
        "password": step.password
      }),
    };
    const data = await fetch(apiURL+"/api/login_check", requestOptions);
    if(data.status == 200){
        const dataToken = await data.json();
        const str = JSON.stringify(dataToken).substring(10)
         const newStr = str.substring(0, str.length - 2)
         const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:step.email, password:step.password}
        props.dispatch(action)
        return newStr
        
    }
   
    return null;
    
}

  const verifEmail =async(value)=>{
    const requestOptions = {
      method: 'POST',
    };
    const data = await fetch(apiURL+'/verifUserEmail/'+value,requestOptions);
     const dataStatus = await data.status;
    console.log("here2",dataStatus);
    if(dataStatus == 400){
      setExistEmail(true)  
    }
  }

  const onChangeStepOneData=(value,key,index)=>{
    let aux ={...step}
        aux[key]=value
        if(key=="nomPrenom"){
          if(value.trim()===''){
            aux.validation.error[index]=true
            aux.validation.errorMsg[index]='required'
          }else{
            aux.validation.error[index]=false
            aux.validation.errorMsg[index]=''
          }
        }
         
        if(key=="email"){
          setExistEmail(false )
          verifEmail(value)
        if(existEmail == true){
          console.log("success");
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='*email déja utilisée'
        }
          if(value.trim()===''){
            aux.validation.error[index]=true
            aux.validation.errorMsg[index]='required'
          }
          if(!isEmail(value)){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='verifier que vous avez saisir une adresse email valide'
          }
          else{
            aux.validation.error[index]=false
            aux.validation.errorMsg[index]=''
          }
        }
        if(key=="password"){
            if(value.trim()===''){
              aux.validation.error[index]=true
              aux.validation.errorMsg[index]='required'
            }else{
              aux.validation.error[index]=false
              aux.validation.errorMsg[index]=''
            }
          }
          if(key=="confirmPassword"){
            if(value.trim()===''){
              aux.validation.error[index]=true
              aux.validation.errorMsg[index]='required'
            }
            if(value !== step.password){
              aux.validation.error[index]=true
              aux.validation.errorMsg[index]='mismatch password'
            }
            else{
              aux.validation.error[index]=false
              aux.validation.errorMsg[index]=''
            }
          }
        console.log(aux);
        setStep(aux)
    }
   const onClose = (e) => {
      console.log(e, 'I was closed.');
    };
    const register =async()=>{
      const ERROR = [...step.validation.error]
      const ERROR_MSG=[...step.validation.errorMsg]
      setStepError(ERROR)
      setstepErrorMsg(ERROR_MSG)
      
      if(!step.validation.error.includes(true) && existEmail !== true ){
        let formdata = new FormData()
        formdata.append('first_name', step.nomPrenom)
        formdata.append('last_name', step.nomPrenom)
        formdata.append('email', step.email)
        formdata.append('password', step.password)
        const requestOptions = {
          method: 'POST',
          // headers: myHeaders,
          body: formdata
        };
                    
        fetch(apiURL + '/register', requestOptions)
        .then(response => {
           
          if (response.status == 201) {
            openNotification()
            getTokenUser().then((e)=>{
                if(e !== null){
                     window.location ='/userVerification'
                }
            })
          } 
        })
        .catch(error => console.log('error', error));
      }
  }
  const LoginForm =()=>{
    window.location="/loginPage"
  }
     
        return (
          <Row>
            <div  className="blue-page-shifty">
                    <img className="blue-page-image" src={imageShifty} />
            </div>
            <div className="register-form-content">
          <div className="register-form-title">
              Commencer !
          </div>
          <div className='register-form-compte'>
              <span className='register-form-compte-exist'>j'ai un compte ? </span><span onClick={LoginForm} className='register-form-sign_in'> Sign In</span>
          </div>
          <div className='register-form-input'>
          {existEmail == true?<div className="error-email-exist">
            <Alert
              message={"email déja utilisé"}
              type="error"
              closable
              onClose={onClose}
            />
          </div>
          :null}
           <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
             
            >
            <Form.Item>
              <Input placeholder='Nom et prenom' onChange={(e)=>onChangeStepOneData(e.target.value,'nomPrenom',0)} className="register-form-input-style" value={step.nomPrenom} />
              {/* {nomPrenomError&&<div className="error-user-steps" style={{color:'red'}}>{nomPrenomError}</div>} */}
              {stepError[0]&&<div className='registration-error-message' style={{color:'red'}}>{stepErrorMsg[0]}</div>}
            </Form.Item>
            <Form.Item>
              <Input placeholder='Adresse email' onChange={(e)=>onChangeStepOneData(e.target.value,'email',1)} style={existEmail ==true ?{borderColor:"red"}: null} className="register-form-input-style" value={step.email} />
              {stepError[1]&&<div className='registration-error-message' style={{color:'red'}}>{stepErrorMsg[1]}</div>}
            </Form.Item>
            <Form.Item>
            <Input.Password  placeholder='Mot de passe' onChange={(e)=>onChangeStepOneData(e.target.value,'password',2)} className="register-form-input-style" />
              {stepError[2]&&<div className='registration-error-message' style={{color:'red'}}>{stepErrorMsg[2]}</div>}
            </Form.Item>
            <Form.Item>
              <Input.Password  placeholder='Confirmer votre mot de passe' onChange={(e)=>onChangeStepOneData(e.target.value,'confirmPassword',3)} className="register-form-input-style" />
              {stepError[3]&&<div className='registration-error-message' style={{color:'red'}}>{stepErrorMsg[3]}</div>}
            </Form.Item> 
            </Form>
              <Row className='register-form-button'><Button className='register-form-button-style' onClick={register}>S'inscrire</Button></Row>
          </div>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);