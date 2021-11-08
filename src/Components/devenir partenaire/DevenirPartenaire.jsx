//import useState hook to create menu collapse state
import React, { useState } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';
import imageShifty from "../../assets/img/Ellipse 1.png"


import { apiURL } from "../../Config/config";
import { Link, withRouter } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const DevenirPartenaire = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [responsable, setResponsable] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [message, setMessage] = useState('')
    const [secteur, setSecteur] = useState('')
    const [tel, setTel] = useState('')
    const [error, setError] = useState(false)
    const [success,  setSuccess] = useState(false)
    const [value, setValue] = useState()
    const [step, setStep] = useState({entreprise:'',secteur:'',responsable:'',tel:"",email:'',message:'', validation:{error:[true,true,true,true,true,true], errorMsg:["required","required","required","required","required","required"]}});
    const [stepError, setStepError] = useState([true,true,true, true]);
    const [stepErrorMsg, setstepErrorMsg] = useState(['','','','','','']);
    const { Option } = Select;
    const { TextArea } = Input;

    const onChangeStepOneData=(value,key,index)=>{
        let aux ={...step}
            aux[key]=value
            if(key=="entreprise"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            
            
            if(key=="secteur"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }
              else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            if(key=="responsable"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="tel"){
                if(value ==''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="email"){
                if(!value){
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

        const submitForm =async()=>{
            setSuccess('')
            setError('')
            const ERROR = [...step.validation.error]
            const ERROR_MSG=[...step.validation.errorMsg]
            setStepError(ERROR)
            setstepErrorMsg(ERROR_MSG)
            
            if(!step.validation.error.includes(true)){
                            let myHeaders={'Authorization': 'Bearer '+props.auth.token}
                            let formdata =new FormData()
                            formdata.append('entreprise',step.entreprise)
                            formdata.append('secteur',step.secteur)
                            formdata.append('responsable',step.responsable)
                            formdata.append('tel',step.tel)
                            formdata.append('email',step.email)
                            formdata.append('message',step.message)
                           
                           
                            const requestOptions = {
                              method: 'POST',
                              body: formdata,
                              headers: myHeaders,
                            };
                          
                              const data = await fetch(apiURL+'/addPartenanire',requestOptions);
                              const dataJson = await data.json();
                              console.log("here2",dataJson);
                              if(data.status == 201){
                                setSuccess('votre compte a été enregistré avec succès')
                                window.location.reload(false);
                              }
                             
                              if(data.status !== 201 ){
                                setError('error')
                              }
            }
        }  
  





        return(
            <Row className="scroll-contact-style">
                <div className="devenir-partenaire">
                    <div className="img-devenir-partenaire-page-bleu">
                        <img className="devenir-partenaire-img" src={imageShifty} />
                        <Link to="/">
                          <h3 className="fixed-oriented-text">Retour</h3>
                        </Link>
                    </div>
                </div>
                <div className="devenir-partenaire-right-content">
                
                <div className="form-devenir-partenaire">
                    <Row className="title-devenir-partenaire">
                    <div >Devenir partenaire</div>
                    </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="nom de l'entreprise" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e.target.value,'entreprise',0)} />   
                            {stepError[0]&&<div style={{color:'red'}}>{stepErrorMsg[0]}</div>}
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Select defaultValue="Secteur d'activité" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e,'secteur',1)}>
                            <Option value="E-commerce">{'E-commerce'}</Option>
                            <Option value="Technologie">{"Technologie"}</Option>
                            <Option value="Industrie">{"Industrie"}</Option>
                            <Option value="Agriculture">{"Agriculture"}</Option>
                            <Option value="Communication">{"Communication"}</Option>
                            <Option value="Service">{"Service"}</Option>
                            </Select>
                            {stepError[1]&&<div style={{color:'red'}}>{stepErrorMsg[1]}</div>}
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="nom du responsable" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e.target.value,'responsable',2)} />
                            {stepError[2]&&<div style={{color:'red'}}>{stepErrorMsg[2]}</div>}
                        </Row>
                        <Row className="row-devenir-partenaire">
                   
                        <PhoneInput defaultCountry={"TN"} placeholder="Téléphone"  onChange={(e)=>onChangeStepOneData(e,'tel',3)}/>
                        {stepError[3]&&<div style={{color:'red'}}>{stepErrorMsg[3]}</div>}
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="E-mail" className='row-user-information-info-generale-input' onChange={(e)=>onChangeStepOneData(e.target.value,'email',4)} />
                            {stepError[4]&&<div style={{color:'red'}}>{stepErrorMsg[4]}</div>}
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <TextArea className='row-user-information-info-generale-input-text-area' rows={4} placeholder='message' onChange={(e)=>onChangeStepOneData(e.target.value,'message',5)}/>
                            {stepError[5]&&<div style={{color:'red'}}>{stepErrorMsg[5]}</div>}
                        </Row>
                    </div>
                <Row className='button-sauvgarder-user-partenanire'><Button  className='button-sauvgarder-user-information-style'  onClick={() => submitForm()}>Sauvgarder</Button></Row>
                <Row className='confirmation-error-message'>
                {error&&<div style={{color:'red'}}>{error}</div>}
                {success&&<div style={{color:'success'}}>{success}</div>}
                </Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(DevenirPartenaire);