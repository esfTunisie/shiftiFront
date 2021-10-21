import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd';
import { RightOutlined, EnvironmentFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import logofooter from '../../assets/img/logofooter.png';
import { Input } from 'antd';
import { Menu } from 'antd';
import { apiURL } from '../../Config/config';
import axios from 'axios';


const Footer = (props) => {
    
    const { TextArea } = Input;
    const [size, setSize] = useState('')
    const [error, setError] = useState(false)
    const [success,  setSuccess] = useState(false)
    const [value, setValue] = useState()
    const [step, setStep] = useState({email:'', validation:{error:[true], errorMsg:["required"]}});
    const [stepError, setStepError] = useState([true]);
    const [stepErrorMsg, setstepErrorMsg] = useState(['']);


    const onChangeStepOneData=(value,key,index)=>{
        let aux ={...step}
            aux[key]=value
          
              if(key=="email"){
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

    const goService=()=>{
        window.location ='/service';
    }
    const goOffre=()=>{
        window.location ='/offre';
    }

    const onSubmit =async()=>{
        setSuccess('')
        setError('')
        const ERROR = [...step.validation.error]
        const ERROR_MSG=[...step.validation.errorMsg]
        setStepError(ERROR)
        setstepErrorMsg(ERROR_MSG)
        
        if(!step.validation.error.includes(true)){
        let formdata = new FormData()
        formdata.append('email',step.email)
       
        const requestOptions = {
            method: 'POST',
            body: formdata
          };
          const data = await fetch(apiURL+"/addNews", requestOptions);
          console.log("code",data.status)
          if(data.status == 201){
            setSuccess('Le suivi a été enregistré avec succès')
          }
          if(data.status == 400){
            setError('email existe déjà')
          }
          if(data.status !== 201 && data.status !== 400){
            setError('error')
          }

    }}
    

   
       
        return (
            <div>

                <Row justify="center" className="footer-section">
                    <Col xs={24} sm={24} md={11} lg={11} xl={11} className="col-footer-1">
                        <img src={logofooter} className="logofooter" />
                        <p className="text-footer1">Shifti est le centre Digital de services dédié à la
                            démocratisation et à l'accélération des projets de
                            boutiques en ligne. Nous mettons à la disposition des PMEs tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de leurs
                            commerce en ligne. Shifti est votre "One Stop Shop" pour vos projet e-commerce.</p>
                        <a href="#" className="button-footer" > Lire la suite <RightOutlined className="button-footer-icon"/></a>
                    </Col>
                    <Col xs={24} sm={24} md={13} lg={13} xl={13} className="col-footer-2">
                        <Row className="row-row-footer">
                            <Col xs={24} sm={24} md={10} lg={10} xl={10} >
                                <p className="title-color-footer">Liens utiles</p>
                                <Menu mode="vertical">

                                <Menu.Item key="mail" >
                                <p className="contact-footer"> A Propos </p>
                                </Menu.Item>
                               
                                <Menu.Item  onClick={() => goService()}>
                                   
                                   <p className="contact-footer"> Services </p>
                                </Menu.Item>
                                <Menu.Item >
                                 
                                 <p className="contact-footer"> Offres </p>
                               </Menu.Item>
                               </Menu>

                                <p className="newsletter">NewsLetter</p>
                            </Col>
                            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                                <p className="title-color-footer">Contact</p>
                                <span className="footer-inline">
                                <EnvironmentFilled className="icon-footer" /><p className="contact-footer"> Résidence El Badr, Avenue Hédi Nouira, Ariana 2037, Tunisie</p>
                                </span>
                                <span className="footer-inline">
                                <MailFilled className="icon-footer" /><p className="contact-footer">  hello@shifti.co</p>
                                </span>
                                <span className="footer-inline">
                                <PhoneFilled className="icon-footer" /><p className="contact-footer"> +216 20 28 69 66</p>
                                </span>
                                <TextArea className="input-footer" placeholder="Email address" autoSize  onChange={(e)=>onChangeStepOneData(e.target.value,'email',0)} />
                                <Button className="subscribe" shape="round" onClick={() => onSubmit()}> Subscribe</Button>
                                
                                <Row className='confirmation-error-message'>
                                    {error&&<div style={{color:'red'}}>{error}</div>}
                                    {success&&<div style={{color:'success'}}>{success}</div>}
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{justifyContent:"space-around", marginTop:"5px", marginRight:"8%"}}>{stepError[0]&&<div style={{color:'red'}}>{stepErrorMsg[0]}</div>}</Row>
                    </Col>

                </Row>
            </div>

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
      
export default Footer;
