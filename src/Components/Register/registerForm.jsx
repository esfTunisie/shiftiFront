import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col } from 'antd';
import LoginForm from "./Login/LoginForm";
import { Select } from 'antd';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { apiURL } from "../../Config/config";




const RegisterForm =(props)=>{
   
    const [steps, setSteps] = useState(1)
    const [stepsOne, setStepsOne] = useState(false)
    const [stepsTwo, setStepsTwo] = useState(false)
    const [stepsThree, setStepsThree] = useState(false)
    const [NomEntreprise, setNomEntreprise] = useState('')
    const [NomEntrepriseError, setNomEntrepriseError] = useState('')
    const [NomProduitError, setNomProduitError] = useState('')
    const [NomProduit, setNomProduit] = useState('')
    const [chiffrerAffaire, setchiffrerAffaire] = useState('')
    const [rne, setRne] = useState('')
    const [siteWeb, setsiteWeb] = useState('')
    const [chiffrerAffaireError, setchiffrerAffaireError] = useState('')
    const [rneError, setrneError] = useState('')
    const [siteWebError, setsiteWebError] = useState('')
    const [Nom, setNom] = useState('')
    const [Prenom, setPrenom] = useState('')
    const [NomError, setNomError] = useState('')
    const [PrenomError, setPrenomError] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [NewPasswordConfirmation, setNewPasswordConfirmation] = useState('')
    const [nomPrenom, setnomPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setphone] = useState('')
    const [passwordRegister, setpasswordRegister] = useState('')
    const [confirmPasswordRegister, setconfirmPasswordRegister] = useState('')
    const [nomPrenomError, setnomPrenomError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setphoneError] = useState('')
    const [passwordRegisterError, setpasswordRegisterError] = useState('')
    const [confirmPasswordRegisterError, setconfirmPasswordRegisterError] = useState('')
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setpasswordLogin] = useState('')
    const [loginError, setloginError] = useState('')
    const [passwordloginError, setpasswordloginError] = useState('')




    const openNotification = () => {
        notification.success({
          duration: null,
          message: 'Success',
          description:
            'Félicitations ! compte crée',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

    const { Option } = Select;
    useEffect(() => {
        console.log("props",props);
      }, []);
    const LoginForm =()=>{
        window.location ="/loginPage"  
    }
    const registration =()=>{
        window.location ="/registration"
    }
    const validateMagasinForm =()=>{
        if(NomEntreprise == '' || NomEntreprise == null){
            
            setNomEntrepriseError("*required")
        }
        if(NomProduit == '' || NomProduit == null){
            setNomProduitError("*required")
        }
        if(chiffrerAffaire == '' || chiffrerAffaire == null){
            setchiffrerAffaireError("*required")
        }
        if(rne == '' || rne == null){
            setrneError("*required")
        }
        if(siteWeb == '' || siteWeb == null){
            setsiteWebError("*required")
        }

    }
    const handleChange=(value)=> {
        console.log(`selected ${value}`);
      }
    const stepsMagasinInformation =()=>{
     
                    validateMagasinForm()
                    if(NomEntreprise || NomProduit || chiffrerAffaire || rne || siteWeb !=='' ){
                        setStepsOne(true);
                        setSteps(2); 
                    }
    }
    const stepsUserInformation=()=>{
        if(Nom == '' || Nom == null){
            setNomError("*required")
        }
        if(Prenom =='' || Prenom == null){
            setPrenomError('*required')
        }
        if(Nom || Prenom !=='' ){
            setStepsTwo(true);
            setSteps(3); 
        }
    }
    const stepsParameterInformation =()=>{
        if(Password == '' || Password == null){
            setPasswordError("*required")
        }
        if(newPassword !== NewPasswordConfirmation){
            setconfirmPasswordError('*required')
        }
    }
    const register =()=>{
        if(nomPrenom == '' || nomPrenom == null){
            setnomPrenomError("*required")
        }
        if(email == '' || email == null){
            setEmailError("*required")
        }
        if(phone == '' || phone == null){
            setphoneError("*required")
        }
        if(passwordRegister == '' || passwordRegister == null){
            setpasswordRegisterError("*required")
        }
        if(confirmPasswordRegister == '' || confirmPasswordRegister == null){
            setconfirmPasswordRegisterError("*required")
        }
        if(confirmPasswordRegister !== passwordRegister){
            setconfirmPasswordRegisterError("*mismatch data")
        }
        if(nomPrenom || email || phone || passwordRegister !== ''){
            let formdata = new FormData()
          formdata.append('first_name', nomPrenom)
          formdata.append('last_name', nomPrenom)
          formdata.append('email', email)
          formdata.append('password', passwordRegister)
          const requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            body: formdata
          };
    
          fetch(apiURL + '/register', requestOptions)
            .then(response => {
              if (response.status == 201) {
                openNotification()
                setInterval(() => {
                    window.location='/loginPage'
                }, 250);
              }
            })
            .catch(error => console.log('error', error));
    
        }
    }



   const handleSubmit=async()=>{
    
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
            "username": emailLogin,
            "password": passwordLogin
          }),
        };
        
        await fetch(apiURL+"/api/login_check", requestOptions)
          .then(response => {
            if(response.status == 200){
              response.text().then(result =>{
                const str = JSON.stringify(result).substring(14)
                const newStr = str.substring(0, str.length - 4)
                fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
                  'Authorization': 'Bearer '+newStr}})
                 .then(response => response.json()).then(data => {
                   console.log("data",data);
                    const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:emailLogin, client:data}
                    props.dispatch(action)
                   window.location= '/'
                 
                 })
              })
      
            }
            else{
                setloginError("mismatch data")
              const action = {type:"GET_TOKEN", token:'', isLogIn:false }
                this.props.dispatch(action)
                
            }
          })
          .catch(error => console.log('error', error));
          if(passwordLogin == '' || passwordLogin == null){
            setpasswordloginError("*required")
        }
        if(emailLogin == '' || emailLogin == null){
            setloginError("*required")
        }
        
       
      }




   
    if(props.register){
        return (
            <div className="register-form-content">
                <div className="register-form-title">
                    Commencer !
                </div>
                <div className='register-form-compte'>
                    <span className='register-form-compte-exist'>j'ai un compte ? </span><span onClick={LoginForm} className='register-form-sign_in'> Sign In</span>
                </div>
                <div className='register-form-input'>
                    <Input placeholder='Nom et prenom'onChange={(e)=>setnomPrenom(e.target.value)} className="register-form-input-style" />
                    {nomPrenomError&&<div className="error-user-steps" style={{color:'red'}}>{nomPrenomError}</div>}
                    <Input placeholder='Adresse email' onChange={(e)=>setEmail(e.target.value)} className="register-form-input-style" />
                    {emailError&&<div className="error-user-steps" style={{color:'red'}}>{emailError}</div>}
                    <Input placeholder='Numéro de téléphone' onChange={(e)=>setphone(e.target.value)} className="register-form-input-style" />
                    {phoneError&&<div className="error-user-steps" style={{color:'red'}}>{phoneError}</div>}
                    <Input.Password  placeholder='Mot de passe' onChange={(e)=>setpasswordRegister(e.target.value)} className="register-form-input-style" />
                    {passwordRegisterError&&<div className="error-user-steps" style={{color:'red'}}>{passwordRegisterError}</div>}
                    <Input.Password  placeholder='Confirmer votre mot de passe' onChange={(e)=>setconfirmPasswordRegister(e.target.value)} className="register-form-input-style" />
                    {confirmPasswordRegisterError&&<div className="error-user-steps" style={{color:'red'}}>{confirmPasswordRegisterError}</div>}
                    <Row className='register-form-button'><Button className='register-form-button-style' onClick={register}>S'inscrire</Button></Row>
                </div>
    
            </div>
        )
    }
    if(props.login){
        return (
            <div className="register-form-content">
                <div className="login-form-title">
                Content de te revoir
                </div>
              
                <div className='register-form-input'>
                    <Input placeholder='Adresse email'onChange={(e)=>setEmailLogin(e.target.value)}  className="register-form-input-style" />
                    {loginError&&<div className="error-user-steps" style={{color:'red'}}>{loginError}</div>}
                    <Input.Password  placeholder='Mot de passe' onChange={(e)=>setpasswordLogin(e.target.value)} className="register-form-input-style" />
                    {passwordloginError&&<div className="error-user-steps" style={{color:'red'}}>{passwordloginError}</div>}
                    <Row className='login-form-button'><Button className='login-form-button-style' onClick={handleSubmit}>S'identifier</Button></Row>
                    <span onClick={registration} className='register-form-sign_in'> Sign up</span>
                </div>
            </div>
        )
    }
    if(props.userInformation){
        if( props.auth.steps == 3){
            return(
            <div className="register-form-content-steps-1">
                <Input placeholder='Nom de l’entreprise' onChange={(e)=>setNomEntreprise(e.target.value)} className="register-form-input-style" />
                {NomEntrepriseError&&<div className="error-user-steps" style={{color:'red'}}>{NomEntrepriseError}</div>}
                <Select defaultValue="Secteur d’activité" className="register-form-input-style" onChange={handleChange}>
                    <Option value="test">test</Option>
                    <Option value="test1">test1</Option>
                    <Option value="test2">test2</Option>
                </Select>
                <Input placeholder='Produits' onChange={(e)=>setNomProduit(e.target.value)} className="register-form-input-style" />
                {NomProduitError&&<div className="error-user-steps" style={{color:'red'}}>{NomProduitError}</div>}
                <Input placeholder='Chiffre d’affaire annuel' onChange={(e)=>setchiffrerAffaire(e.target.value)} className="register-form-input-style" />
                {chiffrerAffaireError&&<div className="error-user-steps" style={{color:'red'}}>{chiffrerAffaireError}</div>}
                <Input placeholder='Rne' onChange={(e)=>setRne(e.target.value)} className="register-form-input-style" />
                {rneError&&<div className="error-user-steps" style={{color:'red'}}>{rneError}</div>}
                <Input placeholder='Site web' onChange={(e)=>setsiteWeb(e.target.value)} className="register-form-input-style" />
                {siteWebError&&<div className="error-user-steps" style={{color:'red'}}>{siteWebError}</div>}
                <Row className='login-form-button-steps-1'><Button onClick={stepsMagasinInformation} className='login-form-button-style-steps-1'>Submit</Button></Row>
            </div>
            )
        }
        if( props.auth.steps == 2){
            return(
                <div className="register-form-content-steps-1">
               
                <Input placeholder='password' onChange={(e)=>setPassword(e.target.value)} className="register-form-input-style" />
                {PasswordError&&<div className="error-user-steps" style={{color:'red'}}>{PasswordError}</div>}
               
                <Input placeholder='new password' onChange={(e)=>setNewPassword(e.target.value)} className="register-form-input-style" />
                <Input placeholder='confirm new password' onChange={(e)=>setNewPasswordConfirmation(e.target.value)} className="register-form-input-style" />
                {confirmPasswordError&&<div className="error-user-steps" style={{color:'red'}}>{confirmPasswordError}</div>}
                
                <Row className='login-form-button-steps-1'><Button onClick={stepsParameterInformation} className='login-form-button-style-steps-1'>Sauvgarder</Button></Row>
            </div>
            )
        }
        if( props.auth.steps == 1){
            return(
                <div className="register-form-content-steps-1">
               
                <Input placeholder='Nom' onChange={(e)=>setNom(e.target.value)} className="register-form-input-style" />
                {NomError&&<div className="error-user-steps" style={{color:'red'}}>{NomError}</div>}
               
                <Input placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)} className="register-form-input-style" />
                {PrenomError&&<div className="error-user-steps" style={{color:'red'}}>{PrenomError}</div>}
                
                <Row className='login-form-button-steps-1'><Button onClick={stepsUserInformation} className='login-form-button-style-steps-1'>Sauvgarder</Button></Row>
            </div>
            )
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
      
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);