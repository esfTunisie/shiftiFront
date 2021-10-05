//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import interface2 from "../assets/img/interface.png"
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navabar';
import MenuNav from "../Components/Menu/Menu";
import { Input, Row, Col, notification, Button, Alert, Form , Select} from 'antd';
import imageShifty from "../assets/img/Ellipse 1.png"
import map from "../assets/img/maps.PNG"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { RightOutlined, EnvironmentFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { apiURL } from "../Config/config";
const { TextArea } = Input;
const Contact = (props) => {
    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [success,  setSuccess] = useState(false)
    const [value, setValue] = useState()
    const [step, setStep] = useState({name:'',entreprise:'',mail:'',message:'', validation:{error:[true,true,true,true], errorMsg:["required","required","required","required"]}});
    const [stepError, setStepError] = useState([true,true,true, true]);
    const [stepErrorMsg, setstepErrorMsg] = useState(['','','','']);



    const onChangeStepOneData=(value,key,index)=>{
        let aux ={...step}
            aux[key]=value
          
            
            
            if(key=="name"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }
              else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            if(key=="entreprise"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="mail"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="message"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
            
            console.log(aux);
           
            setStep(aux)
        }




    const Send =async()=>{
        const ERROR = [...step.validation.error]
        const ERROR_MSG=[...step.validation.errorMsg]
        setStepError(ERROR)
        setstepErrorMsg(ERROR_MSG)

        if(!step.validation.error.includes(true)){
        let formdata = new FormData()

        formdata.append('name',step. name)
        formdata.append('entreprise',step.entreprise)
        formdata.append('mail',step.mail)
        formdata.append('message',step.message)
      
        const requestOptions = {
            method: 'POST',
            body: formdata
          };
          const data = await fetch(apiURL+"/addContact", requestOptions);
          console.log("code",data.status)
          if(data.status == 201){
            setSuccess('votre message a été envoyé avec succès')
           
            window.location.reload(false);
        
          }
          if(data.status !== 201){
            setError('email existe déjà')
            
          }
        }
    }
    
        return(
           
            <Row>
                
             <div className="devenir-partenaire">
                    <div className="img-devenir-partenaire-page-bleu">
                        <img className="devenir-partenaire-img" src={imageShifty} />
                    </div>
            </div>
            <div className="contact-right-content">
                
            <div className="form-contact">
                <Row className="title-contact">
                        <div >Contact</div>
                </Row>
                        <Row className="row-contact">
                            <Input placeholder="Nom et prénom" className='row-user-information-info-generale-input'onChange={(e)=>onChangeStepOneData(e.target.value,'name',0)} />   
                            {stepError[0]&&<div style={{color:'red'}}>{stepErrorMsg[0]}</div>}
                        </Row>
                        <Row className="row-contact">
                            <Input placeholder="Entreprise" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e.target.value,'entreprise',1)}/>   
                            {stepError[1]&&<div style={{color:'red'}}>{stepErrorMsg[1]}</div>}
                        </Row>

                        <Row className="row-contact">
                            <Input placeholder="E-mail" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e.target.value,'mail',2)} />
                            {stepError[2]&&<div style={{color:'red'}}>{stepErrorMsg[2]}</div>}
                        </Row>
                        <Row className="row-contact">
                            <TextArea placeholder="Message" className='row-user-information-info-generale-input-text-area' onChange={(e)=>onChangeStepOneData(e.target.value,'message',3)}/>
                            {stepError[3]&&<div style={{color:'red'}}>{stepErrorMsg[3]}</div>}
                        </Row>
                        <Row className='button-sauvgarder-user-information'>
                        <Button  className='button-send-contact-style' onClick={() => Send()}>Envoyer le message</Button>
                    </Row>
                    <Row className='confirmation-error-message'>
                {error&&<div style={{color:'red'}}>{error}</div>}
                {success&&<div style={{color:'success'}}>{success}</div>}
                </Row>
                    </div>
                    <br/><br/>
                    <div className="footer-contact">
                    <span className="icon-inline">
                                <EnvironmentFilled className="icon-footer" /><p className="contact-footer"> Résidence El Badr, Avenue Hédi Nouira, Ariana 2037, Tunisie</p>
                                </span>
                                <span className="icon-inline">
                                <MailFilled className="icon-footer" /><p className="contact-footer">  hello@shifti.co</p>
                                </span>
                                <span className="icon-inline">
                                <PhoneFilled className="icon-footer" /><p className="contact-footer"> +216 20 28 69 66</p>
                            </span>
                    </div>
                            
                </div>
                <div className="contact-right-card">
                <img  src={map} /> 
                </div>         
            </Row>
            
          
        );
       

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
      
export default connect(mapStateToProps, mapDispatchToProps)(Contact);