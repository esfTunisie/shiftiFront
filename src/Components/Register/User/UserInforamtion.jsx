import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col, notification, Button, Alert, Form } from 'antd';
import interface2 from "../../../assets/img/interface.png"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { apiURL } from "../../../Config/config";







const UserInformation = (props) => {
    const [value, setValue] = useState()
    const [step, setStep] = useState({phone:'',adresse:'',n:'',rue:'',ville:'',codePostal:'', validation:{error:[true,true,true,true,true,true], errorMsg:["required","required","required","required","required","required"]}});
    const [stepError, setStepError] = useState([true,true,true, true,true,true]);
    const [stepErrorMsg, setstepErrorMsg] = useState(['','','','','','']);
    const [phoneNumber, setPhoneNumber] = useState('')
    console.log(phoneNumber);
    const redirection =()=>{
        console.log('test');
        window.location='/user-shop'
    }

    const onChangeStepOneData=(value,key,index)=>{
        let aux ={...step}
            aux[key]=value
            if(key=="phone"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            
            
            if(key=="adresse"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }
              else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            if(key=="n"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="rue"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="ville"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="codePostal"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
            console.log(aux);
            console.log(props.auth.token);
            setStep(aux)
        }
        const submitForm =async()=>{
            const ERROR = [...step.validation.error]
            const ERROR_MSG=[...step.validation.errorMsg]
            setStepError(ERROR)
            setstepErrorMsg(ERROR_MSG)
            
            if(!step.validation.error.includes(true)){
                            let myHeaders={'Authorization': 'Bearer '+props.auth.token}
                            let formdata =new FormData()
                            formdata.append('phone',step.phone)
                            formdata.append('rue',step.rue)
                            formdata.append('numerRue',step.n)
                            formdata.append('ville',step.ville)
                            formdata.append('codePostal',step.codePostal)
                            formdata.append('adresse',step.adresse)
                           
                           
                            const requestOptions = {
                              method: 'POST',
                              body: formdata,
                              headers: myHeaders,
                            };
                          
                              const data = await fetch(apiURL+'/api/addUserInformation',requestOptions);
                              const dataJson = await data.json();
                              console.log("here2",dataJson);
                              if(data.status == 201){ 
                                window.location='/user-shop'
                              }
            }
        }
  
        return(
       
            <Row>
            <div className="blue-page-shiftyy">
                <img className="blue-page-image" src={interface2} />
            </div>
            <div className="register-form-content-steps-1">
                
            
            <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              className='form-user-information'
             
            >
                <div className='user-information-title-mobile'>Plus que quelques infos de contact</div>
                <Form.Item>
                    <PhoneInput country={"tn"} placeholder={'+216 99 88 77 66'} value={step.phone} onChange={(e)=>onChangeStepOneData(e,'phone',0)}  />
                    {stepError[0]&&<div style={{color:'red'}}>{stepErrorMsg[0]}</div>}
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Adresse' className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'adresse',1)} />
                    {stepError[1]&&<div style={{color:'red'}}>{stepErrorMsg[1]}</div>}
                </Form.Item>
                <div className='row-user-information'>
                        <div>
                        <Form.Item>
                            <Input placeholder={'N'} className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'n',2)}  />
                            {stepError[2]&&<div style={{color:'red'}}>{stepErrorMsg[2]}</div>}
                        </Form.Item>
                        </div>
                        <div>
                        <Form.Item>
                            <Input placeholder={'Rue'} className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'rue',3)} />
                            {stepError[3]&&<div style={{color:'red'}}>{stepErrorMsg[3]}</div>}
                        </Form.Item>
                        </div>
                      
                </div>
                <div className='row-user-information'>
                        
                        <div>
                        <Form.Item>
                            <Input placeholder={'Ville'} className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'ville',4)} />
                            {stepError[4]&&<div style={{color:'red'}}>{stepErrorMsg[4]}</div>}
                        </Form.Item>
                        </div>
                       <div>
                        <Form.Item>
                                <Input placeholder={'Code postal'} className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'codePostal',5)}  />
                                {stepError[5]&&<div style={{color:'red'}}>{stepErrorMsg[5]}</div>}
                        </Form.Item>
                       </div>
                </div>
            </Form>
                <Row className='button-sauvgarder-user-informationn'><Button  className='button-sauvgarder-user-information-style' onClick={submitForm}>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);