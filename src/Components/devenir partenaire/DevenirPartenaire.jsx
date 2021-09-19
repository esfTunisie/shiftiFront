//import useState hook to create menu collapse state
import React, { useState } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';
import imageShifty from "../../assets/img/Ellipse 1.png"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";




const DevenirPartenaire = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const { Option } = Select;
    const { TextArea } = Input;
        return(
            <Row>
                <div className="devenir-partenaire">
                    <div className="img-devenir-partenaire-page-bleu">
                        <img className="devenir-partenaire-img" src={imageShifty} />
                    </div>
                </div>
                <div className="devenir-partenaire-right-content">
                
                <div className="form-devenir-partenaire">
                    <Row className="title-devenir-partenaire">
                    <div >Devenir partenaire</div>
                    </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="nom de l'entreprise" className='row-user-information-info-generale-input'  />   
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Select defaultValue="Secteur d'activité" className='row-user-information-info-generale-input'>
                                <Option value="Fondateur/ co-Fondateur">{'Fondateur/ co-Fondateur'}</Option>
                                <Option value="Membre de l'équipe">{"Membre de l'équipe"}</Option>
                            </Select>
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="nom du responsable" className='row-user-information-info-generale-input'  />
                        </Row>
                        <Row className="row-devenir-partenaire">
                        <PhoneInput country={"tn"} placeholder={'+216 99 88 77 66'} value={phoneNumber} onChange={(e)=>setPhoneNumber(e)}  />
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <Input placeholder="E-mail" className='row-user-information-info-generale-input'  />
                        </Row>
                        <Row className="row-devenir-partenaire">
                            <TextArea className='row-user-information-info-generale-input-text-area' rows={4} />
                        </Row>
                    </div>
                <Row className='button-sauvgarder-user-information'><Button  className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>
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