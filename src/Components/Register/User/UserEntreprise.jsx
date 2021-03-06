import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';
import interface2 from "../../../assets/img/interface.png"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import piceJoint from '../../../assets/img/pieceJoint.svg'
import { apiURL } from "../../../Config/config";






const UserEntreprise = (props) => {
    const { Option } = Select;
    const [value, setValue] = useState()
    const [step, setStep] = useState({nomEntreprise:'',secteurActivite:'',produit:'',chiffreAffaire:'',rne:'',webSite:'', validation:{error:[true,true,true,true,true,true], errorMsg:["required","required","required","required","required","required"]}});
    const [stepError, setStepError] = useState([true,true,true, true,true,true]);
    const [stepErrorMsg, setstepErrorMsg] = useState(['','','','','','']);
    const [fileList, setFileList] = useState()
    const [phoneNumber, setPhoneNumber] = useState('')
    console.log(phoneNumber);
  
    const cv = {
        name: 'cv',
          // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
            setFileList(info.originFileOb)
          
          console.log("info",info);
        
        },
      };
      const onChangeStepOneData=(value,key,index)=>{
        let aux ={...step}
            aux[key]=value
            if(key=="nomEntreprise"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            
            
            if(key=="secteurActivite"){
              if(value.trim()===''){
                aux.validation.error[index]=true
                aux.validation.errorMsg[index]='required'
              }
              else{
                aux.validation.error[index]=false
                aux.validation.errorMsg[index]=''
              }
            }
            if(key=="produit"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="chiffreAffaire"){
                if(value.trim()===''){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="rne"){
                if(!value){
                  aux.validation.error[index]=true
                  aux.validation.errorMsg[index]='required'
                }else{
                  aux.validation.error[index]=false
                  aux.validation.errorMsg[index]=''
                }
              }
              if(key=="webSite"){
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
            const ERROR = [...step.validation.error]
            const ERROR_MSG=[...step.validation.errorMsg]
            setStepError(ERROR)
            setstepErrorMsg(ERROR_MSG)
            
            if(!step.validation.error.includes(true)){
                            let myHeaders={'Authorization': 'Bearer '+props.auth.token}
                            let formdata =new FormData()
                            formdata.append('nomEntreprise',step.nomEntreprise)
                            formdata.append('secteurActivit??',step.secteurActivite)
                            formdata.append('produit',step.produit)
                            formdata.append('chiffreAffaire',step.chiffreAffaire)
                            formdata.append('rne',step.rne)
                            formdata.append('webSite',step.webSite)
                           
                           
                            const requestOptions = {
                              method: 'POST',
                              body: formdata,
                              headers: myHeaders,
                            };
                          
                              const data = await fetch(apiURL+'/api/addUserInformation',requestOptions);
                              const dataJson = await data.json();
                              console.log("here2",dataJson);
                              if(data.status == 201){ 
                                window.location='/user-profile'
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
                <div className='user-information-title-entreprise'>Parlez-nous de votre entreprise</div>
                <Form.Item>
                    <Input placeholder="Nom de l'entreprise" className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'nomEntreprise',0)} />
                    {stepError[0]&&<div style={{color:'red'}}>{stepErrorMsg[0]}</div>}
                </Form.Item>
                <Form.Item>
                <Select defaultValue="Secteur d'activit??" className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e,'secteurActivite',1)}>
                    <Option value="E-commerce">{'E-commerce'}</Option>
                    <Option value="Technologie">{"Technologie"}</Option>
                    <Option value="Industrie">{"Industrie"}</Option>
                    <Option value="Agriculture">{"Agriculture"}</Option>
                    <Option value="Communication">{"Communication"}</Option>
                    <Option value="Service">{"Service"}</Option>
                </Select>
                {stepError[1]&&<div style={{color:'red'}}>{stepErrorMsg[1]}</div>}
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Produit" className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'produit',2)} />
                    {stepError[2]&&<div style={{color:'red'}}>{stepErrorMsg[2]}</div>}
                </Form.Item>
                <Form.Item>
                <Select defaultValue="Chiffre d'afaire anuelle" className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e,'chiffreAffaire',3)}>
                    <Option value="Moins de 5000 DT">{'Moins de 5000 DT'}</Option>
                    <Option value="?? partir de 5000 DT">{"?? partir de 5000 DT"}</Option>
                   
                    <Option value="Entre 5000 DT et 10000 DT">{"Entre 5000 DT et 10000 DT"}</Option>
                    <Option value="Plus de 10000 DT">{"Plus de 10000 DT"}</Option>
                    <Option value="Plus de 20000 DT">{"Plus de 20000 DT"}</Option>
                </Select>
                {stepError[3]&&<div style={{color:'red'}}>{stepErrorMsg[3]}</div>}
                </Form.Item>
                <Form.Item>
                <Upload placeholder={'RNE'} maxCount={1} accept=".doc,.docx,application/msword"  value={fileList} {...cv} onChange={(info)=>onChangeStepOneData(info.fileList[0].originFileObj,'rne',4)}>
                    <Button className='row-user-information-adresse' icon={<UploadOutlined />}><img width={'5%'} style={{float:"right"}} src={piceJoint} /></Button>
                </Upload>
                {stepError[4]&&<div style={{color:'red'}}>{stepErrorMsg[4]}</div>}
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Web site" className='row-user-information-adresse' onChange={(e)=>onChangeStepOneData(e.target.value,'webSite',5)} />
                    {stepError[5]&&<div style={{color:'red'}}>{stepErrorMsg[5]}</div>}
                </Form.Item>
             
            </Form>
                <Row className='button-sauvgarder-user-information-entreprise'><Button  className='button-sauvgarder-user-information-style' onClick={submitForm}>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(UserEntreprise);