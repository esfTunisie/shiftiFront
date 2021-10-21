import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import BluePage from "../BluePage";
import RegisterForm from "../registerForm";
import { apiURL } from "../../../Config/config";
import { Input, Row, Col, notification, Button, Alert, Form } from 'antd';
import imageShifty from "../../../assets/img/Ellipse1.svg"
import isEmail from "validator/lib/isEmail";




const LoginPage =(props)=>{

  const [loginError, setloginError] = useState(false)
  const [data, setData] = useState({email:'',password:'',validation:{error:[true,true], errorMsg:['required','required']}});
  const [dataError, setDataError] = useState([true,true]);
  const [dataErrorMsg, setDataErrorMsg] = useState(['','']);
  const [error, setError] = useState(false)
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

useEffect(() => {
 const   handleResize =()=> {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
  }
      window.addEventListener('resize', handleResize)
}, []);
console.log("dimenssionlogin",dimensions);

  
  const onChangeData=(value,key,index)=>{
    let aux ={...data}
    aux[key]=value
    if(key=="email"){
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
    setData(aux)
  }
  const handleSubmit= async()=>{
    const ERROR = [...data.validation.error]
    const ERROR_MSG=[...data.validation.errorMsg]
    setDataError(ERROR)
    setDataErrorMsg(ERROR_MSG)
    if(!data.validation.error.includes(true)){
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          "username": data.email,
          "password": data.password
        }),
      };
      const requestOptions1 = {
        method: 'GET', 
      };
      const data1 = await fetch(apiURL+'/getAllUserInformation/'+data.email,requestOptions1);
      
      await fetch(apiURL+"/api/login_check", requestOptions)
        .then(response => {
          if(response.status == 200){
          const action = {type:"CHANGE_STEPS",steps:1}
          props.dispatch(action)
            response.text().then(result =>{
              const str = JSON.stringify(result).substring(14)
              const newStr = str.substring(0, str.length - 4)
              fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
                'Authorization': 'Bearer '+newStr}})
               .then(response => response.json()).then(dataMagsin => {
                 console.log("data",data);
                 if(dataMagsin.actif == true){
                  const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:data.email, client:dataMagsin, password:data.password}
                  props.dispatch(action)
                  

                  if(data1.status == 200){ 

                    window.location= '/user-profile'

                  }
                  if(data1.status !== 200){ 

                    window.location= '/user'

                  }
                
                }
                if(dataMagsin.actif == false){
                  setError('Compte en attente. Veuillez vérifier votre e-mail !')
                  const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:data.email, password:data.password}
                  props.dispatch(action)
                  window.location ='/userVerification'
                 
                }



               })
            })
    
          }
          else{
              setloginError(true)
            const action = {type:"GET_TOKEN", token:'', isLogIn:false }
              this.props.dispatch(action)
              
          }
        })
        .catch(error => console.log('error', error));
    } 
  }
  const registration =()=>{
    window.location ="/registration"
  }
  const onClose = (e) => {
    console.log(e, 'I was closed.');
  };
  


     
        return (
            <Row>
                <div  className="blue-page-shifty">
                    <img className="blue-page-image" src={imageShifty} />
                </div>
                <div className="register-form-content">
                <div className="login-form-title">
                Content de te revoir
                </div>

                <div className='register-form-input'>
                {loginError == true?<div className="error-email-exist">
            <Alert
              message={"error"}
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
              <Form.Item className="row-login-form">
                    <Input placeholder='Adresse email'onChange={(e)=>onChangeData(e.target.value,'email',0)}  className="register-form-input-style" value={data.email} />
                    {dataError[0]&&<div className='registration-error-message' style={{color:'red'}}>{dataErrorMsg[0]}</div>}
              </Form.Item>
              <Form.Item className="row-login-form">
                    <Input.Password  placeholder='Mot de passe' onChange={(e)=>onChangeData(e.target.value,'password',1)} className="register-form-input-style" value={data.password} />
                    {dataError[1]&&<div className='registration-error-message' style={{color:'red'}}>{dataErrorMsg[1]}</div>}
              </Form.Item>
              </Form>  
              <Row className='confirmation-error-message'>
                {error&&<div style={{color:'red'}}>{error}</div>}

                </Row>    
                    <Row className='login-form-button'><Button className='login-form-button-style' onClick={handleSubmit}>S'identifier</Button></Row>
                    <span onClick={registration} className='register-form-sign_in'> Sign up</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);